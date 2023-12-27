pipeline {
    agent any
    
    triggers {
        folderTrigger '/backend, /frontend'
    }

    stages {
        stage('Login') {
            steps {
                // For simplicity, we assume that Docker is already installed on the agent machine.
                script {
                    
                    env.REGISTRY = "registry.gitlab.com"
                    env.IMAGE_TAG = "latest"
                    // env.REPOSITORY = "akherati5660/bookstore/backend"
                    // env.DOCKERFILE_PATH = "./backend/BookStore"

                    // Authenticate with the container registry
                    withCredentials([usernamePassword(credentialsId: 'gitlab-credentials', passwordVariable: 'REGISTRY_PASSWORD', usernameVariable: 'REGISTRY_USERNAME')]) {
                        sh "docker login -u $REGISTRY_USERNAME -p $REGISTRY_PASSWORD $REGISTRY"
                    }

                    // // Build the Docker image
                    // sh "docker build -t $REPOSITORY:$IMAGE_TAG $DOCKERFILE_PATH"

                    // // Tag the Docker image with the container registry URL
                    // sh "docker tag $REPOSITORY:$IMAGE_TAG $REGISTRY/$REPOSITORY:$IMAGE_TAG"

                    // // Push the Docker image to the container registry
                    // sh "docker push $REGISTRY/$REPOSITORY:$IMAGE_TAG"
                    
                    // // Log out from the container registry
                    // sh "docker logout $REGISTRY"
                }
            }
        }
        stage('Backend') {
            when {
                changeset './backend/BookStore/**'
            }
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/backend ./backend/BookStore"
                    sh "docker tag akherati5660/bookstore/backend:$IMAGE_TAG $REGISTRY/akherati5660/bookstore/backend:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/backend:$IMAGE_TAG"
                }
            }
        }
        stage('Frontend') {
            when {
                changeset './frontend/vite_project/**'
            }
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/frontend ./frontend/vite_project"
                    sh "docker tag akherati5660/bookstore/frontend:$IMAGE_TAG $REGISTRY/akherati5660/bookstore/frontend:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/frontend:$IMAGE_TAG"
                }
            }
        }
        stage('nginx php') {
            when {
                changeset './backend/Dockerfile'
                changeset './backend/BookStore.nginx.conf'
            }
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/nginx-php ./backend/"
                    sh "docker tag akherati5660/bookstore/nginx-php:$IMAGE_TAG $REGISTRY/akherati5660/bookstore/nginx-php:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/nginx-php:$IMAGE_TAG"
                }
            }
        }
        stage('nginx react') {
            when {
                changeset './frontend/Dockerfile'
                changeset './frontend/react.nginx.conf'
            }
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/nginx-node ./frontend/"
                    sh "docker tag akherati5660/bookstore/nginx-node:$IMAGE_TAG $REGISTRY/akherati5660/bookstore/nginx-node:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/nginx-node:$IMAGE_TAG"
                }
            }
        }
        stage('cv') {
            when {
                changeset './CV/**'
            }
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/cv ./CV"
                    sh "docker tag akherati5660/bookstore/cv:$IMAGE_TAG $REGISTRY/akherati5660/bookstore/cv:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/cv:$IMAGE_TAG"
                }
            }
        }
    }
}
