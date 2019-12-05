pipeline {
  agent any
  environment {
          CI = 'true'
  }
  stages {
    stage('Startup') {
      steps {
        sh "npm config set scripts-prepend-node-path true"
        sh "apk add nodejs"
        sh 'npm --version'
        sh 'git log --reverse -1'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run lint'
        sh 'npm run test'
      }
      post {
        always {
          checkstyle pattern: 'output/lint/eslint.xml'
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
