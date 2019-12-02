pipeline {
  agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
  stages {
    stage('Startup') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm start'
        sh 'npm pack'
      }
    }

  }
}
