# 🎭 Playwright POM JavaScript Automation

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/rshah160487/playwright-pom-javascript/playwright.yml?branch=main)
![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-blue)

## 🚀 Overview
This project is an end-to-end automation testing framework using **Playwright** with the **Page Object Model (POM)** in **JavaScript**. It supports functional and regression testing for web applications.

## 🏗️ Tech Stack
- **Test Automation**: [Playwright](https://playwright.dev/)
- **Programming Language**: JavaScript (Node.js)
- **Test Runner**: Playwright Test Runner
- **CI/CD Integration**: GitHub Actions & Jenkins
- **Reporting**: Playwright HTML Reporter

## 📂 Project Structure

playwright-pom-javascript/
│-- .github/workflows/      # GitHub Actions workflows
│-- pages/                  # Page Object Model (POM) files
│   ├── loginPage.js        # Login page object
│-- tests/                  # Playwright test cases
│   ├── loginTest.spec.js   # Login test cases 
│-- playwright.config.js    # Playwright configuration
│-- package.json            # Node.js project dependencies
│-- package-lock.json       # Dependency lock file
│-- Jenkinsfile             # CI/CD pipeline for Jenkins
│-- README.md               # Project documentation


## 🛠️ Setup & Run

### **1️⃣ Prerequisites**
- Install [Node.js](https://nodejs.org/) (16+)

### **2️⃣ Install & Run**
```sh
git clone https://github.com/rshah160487/playwright-pom-javascript.git
cd playwright-pom-javascript
npm ci
npx playwright test

### **3️⃣ View Reports**
- npx playwright show-report

🚀 CI/CD Integration
🔹 GitHub Actions
Automated tests on push/pull requests
Workflow: .github/workflows/playwright.yml
🔹 Jenkins Setup
Install Node.js Plugin in Jenkins
Configure Global Tool:
Manage Jenkins → Global Tool Configuration
Add NodeJS installation and specify version
Use the provided Jenkinsfile to trigger CI/CD

📊 Test Execution

Run All Tests
- npx playwright test

Run Specific Test
- npx playwright test tests/login.spec.js

Parallel Execution
- npx playwright test --workers=4

👥 Contributing
Fork & Clone: git clone <repo-url>
Create Feature Branch: git checkout -b feature-name
Commit & Push: git commit -m "Add feature" → git push origin feature-name
Open a Pull Request

📄 License
This project is licensed under the GNU License.



### **🔹 Key Features in this README**
✅ **Badges** (GitHub Actions, Jenkins)  
✅ **Project Overview** (Purpose & Tech Stack)  
✅ **Installation Steps** (Clone, Install, Run)  
✅ **Test Execution Commands** (Run, Report, Parallel)  
✅ **CI/CD Integration** (GitHub Actions, Jenkins)  
✅ **Contribution Guidelines**  