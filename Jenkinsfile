pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'test-results/junit.xml'
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}