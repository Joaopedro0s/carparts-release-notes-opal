import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const apiKey = process.env.GOOGLE_API_KEY ?? process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("Configure GEMINI_API_KEY ou GOOGLE_API_KEY somente no ambiente seguro do servidor ou pipeline.");
}

const model = process.env.GEMINI_MODEL ?? "gemini-3-flash-preview";
const since = process.argv[2] ?? "HEAD~20";
const commits = execFileSync("git", ["log", "--no-merges", "--pretty=format:%h %s", `${since}..HEAD`], { encoding: "utf8" });
const prompt = readFileSync(new URL("../prompts/release-notes.v3.md", import.meta.url), "utf8");
const schema = JSON.parse(readFileSync(new URL("../schemas/release-notes.schema.json", import.meta.url), "utf8"));

const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-goog-api-key": apiKey,
  },
  body: JSON.stringify({
    system_instruction: { parts: [{ text: prompt }] },
    contents: [{ role: "user", parts: [{ text: commits }] }],
    generation_config: {
      response_mime_type: "application/json",
      response_json_schema: schema,
    },
  }),
});
if (!response.ok) throw new Error(`Gemini API respondeu ${response.status}`);
const payload = await response.json();
console.log(payload.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("") ?? "");
