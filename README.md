# 📘 Playwright with JavaScript #02 — Environment Setup

## 🎯 What you'll learn
- Install **Node.js** and **VS Code**
- Create a project folder
- Install Playwright (2 ways: **Terminal** and **VS Code extension**)
- Understand the project folder structure
- Run tests (headless & headed) and open the **HTML report**

---

## 1️⃣ Install Node.js

**Why?** Playwright runs on Node.js, so it's required.

**Steps (Windows):**
1. Go to the official site → [nodejs.org](https://nodejs.org) → Download page
2. Download the **Windows Installer (.msi)** — choose the **LTS** version
3. Double-click → accept license → Next → Next → Install → Finish
4. Default install location: `C:\Program Files\nodejs`

**Verify installation** (open Command Prompt):
```bash
node -v    # shows Node.js version
npm -v     # shows npm version
```

> 💡 **npm** (Node Package Manager) is installed automatically with Node.js. No separate install needed.

---

## 2️⃣ Install VS Code

**Why VS Code?**
| Benefit | Explanation |
|---|---|
| ⚡ Lightweight & fast | Won't slow down your laptop |
| 🟨 JavaScript-friendly | Great support for JavaScript & TypeScript |
| 💡 Auto-suggestions | Makes writing code faster and easier |
| 🧩 Extensions | Playwright, Git, Python and more |
| 🖥 Built-in terminal | No need to open Command Prompt separately |
| 🐞 Easy debugging | Find and fix errors quickly |
| 💸 Free & popular | Used by most developers |

**Steps:**
1. Go to [code.visualstudio.com](https://code.visualstudio.com) → Download
2. Choose your OS (Windows / Mac / Linux)
3. Run the setup → accept license → ✅ tick **"Create a desktop icon"** → Next → Install → Finish

---

## 3️⃣ Create a Project Folder

1. Create a folder anywhere, e.g. `PlaywrightAutomation` on Desktop
2. Open it in VS Code:
   - **File → Open Folder** → select the folder, **or**
   - **Drag and drop** the folder into VS Code
3. Click **"Yes, I trust the authors"** when asked

---

## 4️⃣ Install Playwright

### Method A: Terminal ⭐ (industry standard, asked in interviews)

Open the terminal in VS Code: **View → Terminal** (shortcut: `` Ctrl + ` ``)

```bash
npm init playwright@latest
```

> 💡 `@latest` installs the newest version. For a specific version, replace `latest` with a version number.

**Setup questions:**
| Question | Answer |
|---|---|
| TypeScript or JavaScript? | **JavaScript** (use ↑ ↓ arrow keys, then Enter) |
| Where to put your end-to-end tests? | `tests` (default → press Enter) |
| Add a GitHub Actions workflow? | **true** (Yes) |
| Install Playwright browsers? | **true** (Yes) |

> If you skipped browser install, run it later with: `npx playwright install`

### Method B: VS Code Extension (beginner-friendly)

1. Open a new empty project folder in VS Code
2. Open Extensions: **View → Extensions** or `Ctrl + Shift + X`
3. Search **"Playwright Test for VSCode"** (by Microsoft) → **Install**
4. Configure it: open Command Palette → **View → Command Palette** or `Ctrl + Shift + P`
5. Search **"Install Playwright"** → select it
6. ✅ Select **"Use JavaScript"** (TypeScript is selected by default!)
7. Keep **Chromium, Firefox, WebKit** selected → **OK**

> ⚠️ Installing the extension alone is not enough. You must also **configure** it (steps 4–7).

| | Terminal | VS Code Extension |
|---|---|---|
| Used in industry | ⭐ Most common | Less common |
| Asked in interviews | ✅ Yes | Rarely |
| Beginner-friendly | Good | Easiest |

---

## 5️⃣ Project Folder Structure

```
PlaywrightAutomation/
├── node_modules/          # All installed libraries — never edit manually
├── tests/
│   └── example.spec.js    # Sample test file with 2 demo tests
├── playwright.config.js   # ⭐ Main config file for the whole project
├── package.json           # ⭐ Project "ID card": name, version, dependencies
├── package-lock.json      # Locks exact package versions — don't edit
└── .gitignore             # Files NOT to upload to GitHub
```

| File / Folder | Purpose |
|---|---|
| `node_modules/` | Stores all Playwright & npm packages. Auto-created. **Never edit.** |
| `tests/` | All your test files go here |
| `example.spec.js` | Sample script showing basic format (opening a web page) |
| `playwright.config.js` | Browsers (Chromium, Firefox, WebKit), headless on/off, base URL, screenshots, videos, timeouts. **All project-wide settings.** |
| `package.json` | Project name, version, installed packages. npm uses it to manage the project. |
| `package-lock.json` | Makes sure every computer uses the **same package versions** (no version mismatch) |
| `.gitignore` | Keeps heavy/unwanted files (`node_modules`, screenshots, videos, logs) out of GitHub |

> ⭐ Most important: `playwright.config.js`, `package.json`, and the `tests/` folder

---

## 6️⃣ Run Tests

| Command | What it does |
|---|---|
| `npx playwright test` | Runs **all** tests in the `tests/` folder in **headless** mode (no browser window) |
| `npx playwright test --headed` | Runs tests in **headed** mode (you can see browsers open & close) |

**Why does it run tests from the `tests/` folder?**
Because `playwright.config.js` has:
```javascript
testDir: './tests',
```

### Understanding the output
```
Running 6 tests using 4 workers
6 passed
```
- `example.spec.js` has **2 tests**
- Config has **3 browsers** (Chromium, Firefox, WebKit)
- **2 tests × 3 browsers = 6 tests**
- **Workers** = how many tests run in parallel at the same time

| Mode | Browser visible? | Speed | Used for |
|---|---|---|---|
| Headless (default) | ❌ No | Faster | CI/CD, daily runs |
| Headed (`--headed`) | ✅ Yes | Slower | Learning, watching, debugging |

---

## 7️⃣ Open the HTML Report

A report is generated automatically after every run.

```bash
npx playwright show-report
```

- Opens at `http://localhost:9323`
- Shows tests per browser (Chromium / Firefox / WebKit)
- Shows **passed, failed, flaky, skipped** counts and **total time**

---

## 📝 Quick Command Cheat Sheet

```bash
node -v                          # Check Node.js version
npm -v                           # Check npm version
npm init playwright@latest       # Install Playwright in project
npx playwright install           # Install browsers (if skipped)
npx playwright test              # Run all tests (headless)
npx playwright test --headed     # Run all tests (browser visible)
npx playwright show-report       # Open last HTML report
```

---

## 🎤 Interview Questions from This Video

1. **Why do we need Node.js for Playwright?** → Playwright runs on Node.js.
2. **What is npm?** → Node Package Manager, installed with Node.js, used to install and manage packages.
3. **How do you install Playwright?** → `npm init playwright@latest`
4. **What is the use of `playwright.config.js`?** → Project-wide settings: browsers, headless mode, base URL, timeouts, screenshots, videos.
5. **Difference between `package.json` and `package-lock.json`?** → `package.json` lists project info and dependencies; `package-lock.json` locks exact versions so every machine uses the same ones.
6. **What is headless mode?** → Running tests without showing the browser window. It's the default.
7. **How do you run tests in headed mode?** → `npx playwright test --headed`
8. **Why did 2 tests show as 6?** → Each test runs on 3 browsers.
9. **How do you open the HTML report?** → `npx playwright show-report`

---

## ✅ Practice Task
- [ ] Install Node.js and verify with `node -v` and `npm -v`
- [ ] Install VS Code + Playwright extension
- [ ] Create a project and install Playwright via terminal
- [ ] Run tests in headless mode
- [ ] Run tests in headed mode
- [ ] Open the HTML report and check results for each browser
- [ ] Push the project to GitHub (check that `node_modules` is NOT uploaded)
