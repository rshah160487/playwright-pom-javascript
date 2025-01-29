pipeline {
    agent any

    environment {
        NODE_VERSION = '16' // Specify the Node.js version
        NODEJS_HOME = tool name: 'NodeJS'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Setup Environment') {
            steps {
                script {
                    // Set up Node.js environment
                    echo "Setting up Node.js version ${env.NODE_VERSION}"
                }
                sh '''
                # Install Node.js using nvm
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                nvm install ${NODE_VERSION}
                nvm use ${NODE_VERSION}

                # Verify Node.js installation
                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing project dependencies...'
                }
                sh '''
                npm ci
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    echo 'Executing Playwright tests...'
                }
                sh '''
                npx playwright install --with-deps
                npx playwright test
                '''
            }
        }

        stage('Generate Test Reports') {
            steps {
                script {
                    echo 'Generating HTML test report...'
                }
                sh '''
                # Test results are already generated in the playwright-report folder by Playwright
                ls -l playwright-report
                '''
            }
        }

        stage('Archive Results') {
            steps {
                script {
                    echo 'Archiving test reports...'
                }
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }

        stage('Post Actions') {
            steps {
                script {
                    echo 'Performing post-test actions...'
                }
                sh '''
                # Cleanup or additional actions can be added here
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed!'
        }
        success {
            echo 'Tests completed successfully!'
        }
        failure {
            echo 'Tests failed. Check the Playwright report for details.'
        }
    }
        }
