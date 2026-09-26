# AIACcoutant Playwright Tests

This repository contains Playwright end-to-end tests for the AIACcoutant web application.

## Overview

The project includes automated scripts for purchase-related workflows and billing operations, including:
- login flow
- bill upload page
- all bills filtering and comparison
- tab navigation and filter behavior
- purchase-related UI automation scenarios

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Running tests

Run a single file:

```bash
npx playwright test tests/Allbills.spec.ts
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run across all configured browsers:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Open the Playwright report:

```bash
npx playwright show-report
```

## Project structure

```text
.
├── tests/
│   ├── Allbills.spec.ts
│   ├── billuploads.spec.ts
│   ├── login.spec.ts
│   └── tab.spec.ts
├── package.json
├── playwright.config.ts
├── .gitignore
├── README.md
├── playwright-report/
└── test-results/
```

## Browser support

This project is configured for:
- Chromium
- Firefox
- WebKit

The browser setup is defined in `playwright.config.ts`.

## Important notes

- The app under test is https://app.aiaccountant.com/
- Credentials should never be committed to source control
- Keep secrets in a local `.env` file or secure environment variables

## Example usage

```bash
npx playwright test --project=chromium --reporter=line
```

This project is intended for UI automation testing of the AIACcoutant billing workflow.
