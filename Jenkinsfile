pipeline {
  agent any
  environment {
          CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh "apk add nodejs"
        sh 'npm --version'
        sh 'git log --reverse -1'
        sh 'npm install'
      }
    }
    stage('Unit Test') {
      parallel {
        stage('webpack') {
          steps {
            sh 'npm run build'
          }
        }
        stage('Testing') {
          steps {
            sh 'npm run test'
          }
          post {
                  always {
                    step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
                  }
          }
        }
      }
    }
  }
  tools {
    nodejs 'NodeJS'
  }
}