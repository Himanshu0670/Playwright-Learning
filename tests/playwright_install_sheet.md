# 🎭 Playwright Installation Sheet

## ✅ Prerequisites

### System Requirements

* OS: Windows / macOS / Linux
* Internet connection
* Basic terminal/command prompt knowledge

### Skills Required

* Basic JavaScript
* Basic terminal commands
* Basic understanding of folders & files

---

## 🧱 Step 1: Install Node.js (includes npm)

### 🔹 Check if already installed

```bash
node -v
npm -v
```

If versions show → skip installation

### 🔹 Install Node.js

👉 Download from: [https://nodejs.org](https://nodejs.org)

Choose **LTS version** and install

---

## 📁 Step 2: Create Project Folder

```bash
mkdir playwright-project
cd playwright-project
```

---

## 📦 Step 3: Initialize npm

```bash
npm init -y
```

Creates `package.json`

---

## 🎭 Step 4: Install Playwright

```bash
npm init playwright@latest
```

### It will ask:

```
✔ Do you want to use TypeScript? → Yes/No
✔ Where to put tests? → tests
✔ Add GitHub Actions? → Yes (recommended)
✔ Install browsers? → Yes
```

---

## 🌐 Step 5: Install Browsers (if not auto-installed)

```bash
npx playwright install
```

---

## ▶️ Step 6: Run Sample Test

```bash
npx playwright test
```

---

## 🧪 Step 7: Run in UI Mode

```bash
npx playwright test --headed
```


```bash
npx playwright test --ui
```
NOTE : It launches Playwright’s interactive UI mode where you can visually explore, run, debug tests, view traces, logs, screenshots, and manage test execution through a graphical interface.


// To run a specific file/script.


```bash
npx playwright test login_spec.js
```


// To run script on a specific browser.

```bash
npx playwright test login_spec.js --project=chromium
```

// To run script on a debug mode.

```bash
npx playwright test login_spec.js --project=chromium --headed --debug
```


---

## 👀 Step 8: Open Test Report

```bash
npx playwright show-report
```

---

## 📂 Final Project Structure (with Explanation)

```
playwright-project/
│
├── tests/                     # All test files
│   ├── example.spec.ts        # Sample test file
│   ├── login.spec.ts          # Login tests
│   └── dashboard.spec.ts      # Dashboard tests
│
├── pages/                     # Page Object Model (POM)
│   ├── login.page.ts          # Login page locators & actions
│   └── dashboard.page.ts      # Dashboard page locators & actions
│
├── fixtures/                  # Custom fixtures
│   └── testFixtures.ts        # Global test setup
│
├── utils/                     # Utility functions
│   ├── helpers.ts             # Reusable helper methods
│   └── dataGenerator.ts       # Fake/test data generator
│
├── test-data/                 # Test data files
│   └── users.json             # Test users data
│
├── reports/                   # Test reports
│   └── html-report/           # Playwright HTML report
│
├── playwright.config.ts       # Playwright configuration file
├── package.json               # Project dependencies
├── package-lock.json          # Dependency lock file
├── .env                       # Environment variables
├── .gitignore                 # Git ignore config
├── node_modules/              # Installed packages
└── README.md                  # Project documentation
```

---

# ⚡ Common Commands Cheat Sheet

```bash
npx playwright test              # run all tests
npx playwright test example.spec.ts   # run single file
npx playwright test --headed     # run with browser
npx playwright test --debug      # debug mode
npx playwright test --ui         # UI mode
npx playwright codegen           # auto test generator
```

---

# 🧠 Optional Tools (Professional Setup)

```bash
npm install dotenv
npm install axios
npm install cross-env
```

---

# 🎯 Interview-Ready Checklist

✅ Node + npm installed
✅ Playwright installed
✅ Can run tests
✅ Understand project structure
✅ Can create new test files
✅ Can debug tests

---

# 🏁 You are now Playwright-ready 🚀

---

If you want, I can give you:

* 📘 Learning roadmap sheet
* 🧱 Framework folder structure
* 🧪 Sample project template
* ❓ Interview Q&A sheet
* 📅 Daily study planner
