pipeline {
  agent any
  stages {
    stage('Preflight') {
      steps {
        echo sh(returnStdout: true, script: 'env')
        sh 'node -v'
      }
    }
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
            junit 'coverage/junit.xml'
          }
        }
        stage('Coverage') {
          steps {
            sh 'npm run test -- --coverage'
            cobertura(autoUpdateHealth: true, autoUpdateStability: true, coberturaReportFile: '**/coverage/cobertura-coverage.xml', failNoReports: true, classCoverageTargets: '70', lineCoverageTargets: '80', fileCoverageTargets: '90', sourceEncoding: 'ASCII', conditionalCoverageTargets: '70')
          }
        }
      }
  }
  tools {
    nodejs 'latest'
  }
}
