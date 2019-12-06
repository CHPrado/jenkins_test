pipeline {
  agent any
  environment {
          CI = 'true'
  }
  stages {
    stage('Startup') {
      steps {
        sh "apk add nodejs"
        sh 'npm --version'
        sh 'git log --reverse -1'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        script {
          sh 'npm run build'
          sh 'npm pack'
        }
      }
    }

    stage('Testes') {
      parallel {
        stage('ESLint') {
          steps {
            sh 'npm run-script lint'
          }
        }
        stage('Testes Dinâmicos') {
          steps {
            sh 'npm run test'
          }
        }
      }
      post {
        always {
          stage('Gerando Relatórios'){
            steps {
              recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'output/lint/eslint.xml')
              junit 'output/coverage/junit.xml'
              cobertura coberturaReportFile: 'output/coverage/cobertura-coverage.xml'
            }
          }
        }
      }
    }

    stage('Deploy') {
      steps {
        echo 'Publicar o container, liberar servico e rodar'
      }
    }
  }
  tools {
    nodejs 'NodeJS'
  }
}
