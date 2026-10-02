# Modern JS Seed

A modern Node.js + TypeScript project seed with a fast, strongly typed, testable, and well-formatted development workflow.

## Stack

- Node.js 26
- TypeScript
- ESLint
- Prettier
- Vitest
- V8 coverage
- VS Code workspace configuration
- GitHub Actions CI
- Quokka.js support

## Getting Started

Install dependencies:

    npm install

Run the development checks:

    npm run typecheck
    npm run lint
    npm run format:check
    npm test

Run test coverage:

    npm run coverage

## Development Commands

### Typecheck

    npm run typecheck

Runs the TypeScript compiler without emitting files.

### Lint

    npm run lint

Runs ESLint across the project.

### Format

    npm run format

Formats project files with Prettier.

### Format Check

    npm run format:check

Checks that files are formatted without modifying them.

### Test

    npm test

Runs the Vitest test suite once.

### Coverage

    npm run coverage

Runs the test suite with V8 coverage reporting.

## VS Code

The project includes workspace configuration under `.vscode/`.

Recommended extensions include:

- ESLint
- Prettier
- Vitest
- Quokka.js

Open the project in VS Code and install the recommended extensions when prompted.

## Continuous Integration

GitHub Actions automatically runs the project's quality checks on pushes to `main` and pull requests targeting `main`.

CI verifies:

- TypeScript
- ESLint
- Prettier formatting
- Tests
- Test coverage

## Using This Seed

This repository is intended to be used as a starting point for new JavaScript and TypeScript projects.

After creating a project from the seed, update the package name, description, and source code for your application.
