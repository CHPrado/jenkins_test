pipeline {
  tools {
      nodejs 'default-nodejs'
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