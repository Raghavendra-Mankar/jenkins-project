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
            }
        }

        stage('Check Files') {
            steps {
                sh '''
                    echo "Workspace:"
                    pwd

                    echo "Files:"
                    ls -la

                    echo "Package files:"
                    ls -la package.json package-lock.json
                '''
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