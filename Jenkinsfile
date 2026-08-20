pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-node-app'
        CONTAINER_NAME = 'my-node-app-container'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building application...'

                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Generate Docker Image') {
            steps {
                echo 'Building Docker image...'

                sh """
                    docker build -t ${IMAGE_NAME}:latest .
                """
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Starting Docker container...'

                sh """
                    docker rm -f ${CONTAINER_NAME} || true
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p 3000:3000 \
                        ${IMAGE_NAME}:latest
                """
            }
        }

    }

    post {
        success {
            echo 'Build and deployment completed successfully!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}