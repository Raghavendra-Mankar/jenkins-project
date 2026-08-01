pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
           echo "Installing dependancies"
        }

        stage('Test') {
            steps {
                echo "Testing"
            }
        }

        stage('Build') {
            steps {
                echo "Building"
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}