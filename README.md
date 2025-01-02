# Goal Setter Frontend

Goal Setter Frontend is a modern React-based frontend application designed to help users set, track, and manage their goals effectively. It leverages popular libraries and tools for state management, form handling, rich text editing, and efficient development workflows.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [License](#license)

## Features

- Goal tracking and management
- Rich text editing capabilities
- Syntax highlighting for code snippets
- Responsive design using Tailwind CSS
- State management with Redux Toolkit
- Form validation with React Hook Form and Yup
- Integration with external APIs via React Query

## Tech Stack

- **Framework**: React, Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Rich Text Editors**: CKEditor, TinyMCE, Jodit, Draft.js, Quill
- **Form Handling**: React Hook Form, Yup
- **Code Highlighting**: Prism.js, Highlight.js

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd goal-setter-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open the application in your browser at [http://localhost:1211](http://localhost:1211).

3. For production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Scripts

- `dev`: Starts the development server on port 1211.
- `build`: Builds the application for production.
- `lint`: Lints the project files using ESLint.
- `preview`: Previews the production build.

## Dependencies

Key dependencies used in this project:

- `@ckeditor/ckeditor5-react`: Rich text editor integration
- `@reduxjs/toolkit`: State management library
- `@tanstack/react-query`: API and data fetching
- `react-hook-form`: Form handling library
- `react-icons`: Icon library for React
- `react-router-dom`: Routing library for React
- `tailwindcss`: Utility-first CSS framework
- `yup`: Schema validation for forms

## DevDependencies

Development tools used:

- `@vitejs/plugin-react`: Vite plugin for React
- `eslint`: Linter for JavaScript and React
- `tailwindcss`: CSS framework
- `vite`: Build tool for modern web development

## Proxy Configuration

The application uses the following proxy for API requests:
`https://appsail-****************.development.catalystappsail.in`

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to contribute and suggest improvements!
