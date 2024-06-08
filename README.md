# Extra Docs - Personal and Professional Projects

## Deploy Updates
1. Push content to github

2. Compile and Run Project:
```
npm run build
```

3. If you haven't already installed, install github page package:
```
npm install gh-pages --save-dev
```

4. Deploy:
```
npx gh-pages -d build
```

## Overview
This project is a React-based web application. It contains access to my personal and professional projects.

## Key Components

### 1. Root Directory
- `extra-docs/`: The base directory of the project.

### 2. Documentation and Configuration
- `README.md`: The main documentation file.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `package-lock.json`: Automatically generated file for any operations where npm modifies either the node_modules tree or package.json.
- `package.json`: Lists the packages the project depends on and specifies versions of a package that your project can use.

### 3. Public Assets
- Located in `extra-docs/public/`, contains static files like icons (`favicon.ico`), the main HTML file (`index.html`), and other assets used in the web application.

### 4. Source Code
- Located in `extra-docs/src/`, contains the main JavaScript, CSS, and React component files for the application.

### 5. React Components
- Located in `extra-docs/src/components/`, contains various React components used in the application like `SoftwareEngineeringProjects.js`, `AcademicProjects.js`, etc.

## Deployment
This application is configured for deployment using GitHub Pages, with necessary scripts in `package.json` for building and deploying the application.
