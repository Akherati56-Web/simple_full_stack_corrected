pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // For simplicity, we assume that Docker is already installed on the agent machine.
                script {
                    
                    env.REGISTRY = "registry.gitlab.com"
                    env.REPOSITORY = "akherati5660/bookstore/backend"
                    env.IMAGE_TAG = "v1"
                    env.DOCKERFILE_PATH = "./backend/BookStore"

                    // Authenticate with the container registry
                    withCredentials([usernamePassword(credentialsId: 'gitlab-credentials', passwordVariable: 'REGISTRY_PASSWORD', usernameVariable: 'REGISTRY_USERNAME')]) {
                        sh "docker login -u $REGISTRY_USERNAME -p $REGISTRY_PASSWORD $REGISTRY"
                    }

                    // Build the Docker image
                    sh "docker build -t $REPOSITORY:$IMAGE_TAG $DOCKERFILE_PATH"

                    // Tag the Docker image with the container registry URL
                    sh "docker tag $REPOSITORY:$IMAGE_TAG $REGISTRY/$REPOSITORY:$IMAGE_TAG"

                    // Push the Docker image to the container registry
                    sh "docker push $REGISTRY/$REPOSITORY:$IMAGE_TAG"
                    
                    // Log out from the container registry
                    sh "docker logout $REGISTRY"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'New Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'New Deploying...'
            }
        }
    }
}
