pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                ls
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                cat /etc/os-release
            }
        }
    }
}