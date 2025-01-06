# Enefit Toolkit

Enefit Toolkit is a package that includes a set of tools and utilities to streamline development workflows, including TypeScript support, Storybook integration, and testing utilities.

[GitHub Repository](https://github.com/Bharath-Kumar-S/react-ui-toolkit)

[npm Package](https://www.npmjs.com/package/enefit-toolkit)

[Storybook](https://bharath-kumar-s.github.io/react-ui-toolkit/?path=/docs/components-button--docs)

## Installation

To install this toolkit in your project, run the following command:

```bash
npm install enefit-toolkit
```

## Development

### Scripts

Here are the available npm scripts you can use during development:

- **`build`**: Builds the TypeScript files and runs Vite for bundling.

  ```bash
  npm run build
  ```

- **`lint`**: Lints your code using ESLint.

  ```bash
  npm run lint
  ```

- **`lint:fix`**: Lints and automatically fixes issues in your code.

  ```bash
  npm run lint:fix
  ```

- **`format`**: Runs Prettier to check if your code is formatted correctly.

  ```bash
  npm run format
  ```

- **`format:fix`**: Automatically formats your code using Prettier.

  ```bash
  npm run format:fix
  ```

- **`stylelint`**: Lints your CSS files using Stylelint.

  ```bash
  npm run stylelint
  ```

- **`stylelint:fix`**: Automatically fixes CSS issues using Stylelint.

  ```bash
  npm run stylelint:fix
  ```

- **`storybook`**: Starts Storybook in development mode (default port 6006).

  ```bash
  npm run storybook
  ```

- **`build-storybook`**: Builds the Storybook project for production.

  ```bash
  npm run build-storybook
  ```

- **`build-storybook-ci`**: Builds Storybook for CI, outputting to the `storybook-static` folder.

  ```bash
  npm run build-storybook-ci
  ```

- **`test`**: Runs tests with Vitest.

  ```bash
  npm run test
  ```

- **`coverage`**: Runs tests with Vitest and generates a coverage report.

  ```bash
  npm run coverage
  ```

## TypeScript

The package is built with TypeScript. You can run `tsc` to compile the TypeScript code, or use the build command (`npm run build`) to bundle the toolkit with Vite.

## Testing

This package uses **Vitest** for running tests. Make sure you have the necessary testing libraries installed, such as:

- `@testing-library/react`
- `vitest`

Run the tests with:

```bash
npm run test
```

For coverage reports, run:

```bash
npm run coverage
```

## Storybook

Storybook is integrated to view and test UI components in isolation. Run the following command to start Storybook locally:

```bash
npm run storybook
```

For production builds of Storybook, run:

```bash
npm run build-storybook
```

### Storybook CI

For CI/CD environments, build the Storybook output with:

```bash
npm run build-storybook-ci
```

The build will output to the `storybook-static` directory.

## Development Environment

### Prerequisites

- Node.js (version 18+)
- npm (version 8+)

Install the dependencies by running:

```bash
npm install
```

### Code Formatting & Linting

To ensure your code follows consistent formatting and quality standards, the following tools are used:

- **ESLint** for linting JavaScript and TypeScript code.
- **Prettier** for code formatting.
- **Stylelint** for CSS linting.

You can run the respective commands to fix issues or check the code quality:

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:fix
npm run stylelint
npm run stylelint:fix
```

## Contributing

Feel free to fork this repository, submit issues, and make pull requests. Please make sure that your code follows the project's linting and formatting rules.

This should now be properly structered and released in npm. Let me know if you need any further adjustments and I am happy to collabrate!
