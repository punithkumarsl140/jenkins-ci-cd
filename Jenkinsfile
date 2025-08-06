pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/punithkumarsl140/jenkins-ci-cd.git'

            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Deploy Container') {
            steps {
                sh 'docker run -d -p 9090:8080 myapp:latest'
            }
        }
    }
}
