pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
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
        }
      }
    }
  }
  tools {
    nodejs 'NodeJS'
  }
}
