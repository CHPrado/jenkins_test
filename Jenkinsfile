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
              junit 'build/junit.xml'
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

def uploadArtifact(server) {
  def uploadSpec = """{
            "files": [
              {
                "pattern": "continuous-test-code-coverage-guide*.tgz",
                "target": "npm-stable/"
              }
           ]
          }"""
  server.upload(uploadSpec)
  def buildInfo = Artifactory.newBuildInfo()
  server.upload spec: uploadSpec, buildInfo: buildInfo
  server.publishBuildInfo buildInfo
}