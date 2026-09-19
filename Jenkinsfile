pipeline {
  agent { docker { image 'node:22-alpine' } }
  options { timeout(time: 30, unit: 'MINUTES') }
  stages {
    stage('Instalação') {
      steps { sh 'npm ci' }
    }
    stage('Qualidade') {
      parallel {
        stage('Lint') { steps { sh 'npm run lint' } }
        stage('Testes') { steps { sh 'npm test' } }
      }
    }
    stage('Avaliação do prompt') {
      environment { EVAL_MIN = '0.9' }
      steps { sh 'npm run eval' }
    }
    stage('Homologação com Gemini') {
      when { branch 'main' }
      steps {
        withCredentials([string(credentialsId: 'gemini-api-key', variable: 'GEMINI_API_KEY')]) {
          sh 'test -n "$GEMINI_API_KEY"'
        }
        input message: 'Saída revisada em homologação?', ok: 'Promover'
      }
    }
  }
  post {
    success { echo 'Quality gate aprovado.' }
    failure { echo 'Quality gate reprovado: revise prompt, esquema ou conjunto dourado.' }
  }
}
