pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/punithkumarsl140/jenkins-ci-cd.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Deploy Container') {
            steps {
                sh 'docker run -d -p 8080:8080 myapp:latest'
            }
        }
    }
}
