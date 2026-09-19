const ignored = /^(merge\b|.*\bchore\(deps\)|.*\bbump\b|.*\blockfile\b|.*\bformat(?:ting)?\b|.*\btypo\b.*coment|.*\bci\b.*config)/i;

function clean(line) {
  return line
    .replace(/^\s*[0-9a-f]{6,40}\s+/i, "")
    .replace(/^[a-z]+(?:\([^)]*\))?!?:\s*/i, "")
    .trim();
}

function category(line) {
  if (/\b(security|auth|token|sess[aã]o|credencial|vulnerab)/i.test(line)) return "Segurança";
  if (/\b(feat|adiciona|inclui|novo|nova|exporta)/i.test(line)) return "Nova funcionalidade";
  if (/\b(fix|corrige|falha|erro|timeout)/i.test(line)) return "Correção";
  if (/\b(refactor|perf|build|chore)/i.test(line)) return "Interna";
  return "Revisar";
}

export function classifyOffline(input) {
  const items = String(input).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const publicable = items.filter((line) => !ignored.test(line));
  if (!publicable.length) return "Nenhuma mudança publicável";
  return publicable.map((line) => `${category(line)}: ${clean(line)}`).join("\n");
}
