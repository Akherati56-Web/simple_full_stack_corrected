pipeline {
    agent any
    triggers {
        cron('H/30 * * *')
    }
    stages {
        stage('Login') {
            steps {
                script {
                    env.REGISTRY = "registry.gitlab.com"
                    env.IMAGE_TAG = "v1.0.5"

                    withCredentials([usernamePassword(credentialsId: 'gitlab-credentials', passwordVariable: 'REGISTRY_PASSWORD', usernameVariable: 'REGISTRY_USERNAME')]) {
                        sh "docker login -u $REGISTRY_USERNAME -p $REGISTRY_PASSWORD $REGISTRY"
                    }
                }
            }
        }
        stage('Backend') {
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/backend ./backend/BookStore"
                    sh "docker tag akherati5660/bookstore/backend $REGISTRY/akherati5660/bookstore/backend:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/backend:$IMAGE_TAG"
                }
            }
        }
        stage('Frontend') {
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/frontend ./frontend/vite_project"
                    sh "docker tag akherati5660/bookstore/frontend $REGISTRY/akherati5660/bookstore/frontend:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/frontend:$IMAGE_TAG"
                }
            }
        }
        stage('nginx php') {
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/nginx-php ./backend/"
                    sh "docker tag akherati5660/bookstore/nginx-php $REGISTRY/akherati5660/bookstore/nginx-php:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/nginx-php:$IMAGE_TAG"
                }
            }
        }
        stage('nginx react') {
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/nginx-react ./frontend/"
                    sh "docker tag akherati5660/bookstore/nginx-react $REGISTRY/akherati5660/bookstore/nginx-react:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/nginx-react:$IMAGE_TAG"
                }
            }
        }
        stage('cv') {
            steps {
                script{
                    sh "docker build -t akherati5660/bookstore/cv ./CV"
                    sh "docker tag akherati5660/bookstore/cv $REGISTRY/akherati5660/bookstore/cv:$IMAGE_TAG"
                    sh "docker push $REGISTRY/akherati5660/bookstore/cv:$IMAGE_TAG"
                }
            }
        }
    }
}
