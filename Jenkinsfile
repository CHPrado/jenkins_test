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
    stage('Test') {
      steps {
        sh 'npm run test'
        sh 'npm run-script --silent lint'
      }
      post {
        always {
          recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'output/lint/eslint.xml')
          junit 'output/coverage/junit.xml'
          cobertura coberturaReportFile: 'output/coverage/cobertura-coverage.xml'
        }
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
  }
  tools {
    nodejs 'NodeJS'
  }
}
