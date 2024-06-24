# MInERVA (Medical Information and Electronic Record Vault Application)

![License](https://img.shields.io/badge/license-GNU%20GPL-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D12.0.0-green.svg)
![React](https://img.shields.io/badge/react-%3E%3D17.0.0-blue.svg)

## Overview

MInERVA is a web application designed to provide secure access to patient data stored in newline delimited JSON (NDJSON) files. The primary goal is to facilitate the secure retrieval, viewing, and exporting of patient records, ensuring compliance with data privacy regulations and enhancing data accessibility for authorized users.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Secure Authentication:** Utilizes Azure AD for secure authentication and single sign-on (SSO) capabilities.
- **Patient Data Management:** Search for patients using various filters, view detailed patient records, and manage patient data.
- **Data Exporting:** Export patient data and related documents in formats such as PDF and ZIP.
- **Responsive Design:** Fully responsive user interface ensuring usability across different devices and screen sizes.
- **Custom Hooks and Services:** Uses custom React hooks and services to manage authentication, API calls, and state management.
- **Comprehensive Testing:** Includes tests for components and hooks to ensure reliability and correctness.

## Technologies

- **React:** The front-end framework for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **MSAL (Microsoft Authentication Library):** Used for Azure AD authentication.
- **MongoDB:** A NoSQL database for storing patient data.
- **Express:** A back-end framework for Node.js.
- **Azure Services:** Used for hosting and managing authentication.
- **Jest:** A testing framework for unit and component tests.

## Project Structure

### Frontend

```plaintext
/frontend
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- tsconfig.json
|-- /public
|   |-- favicon.ico
|   |-- index.html
|-- /src
    |-- App.tsx
    |-- authConfig.ts
    |-- index.tsx
    |-- /components
    |   |-- /Auth
    |   |   |-- AuthWrapper.tsx
    |   |-- /Dashboard
    |       |-- Dashboard.tsx
    |       |-- /common
    |           |-- Footer.tsx
    |           |-- Header.tsx
    |           |-- Sidebar.tsx
    |-- /context
    |   |-- AuthContext.tsx
    |   |-- PatientContext.tsx
    |-- /hooks
    |   |-- useApi.ts
    |   |-- useAuth.ts
    |   |-- usePatientRecords.ts
    |   |-- usePatients.ts
    |   |-- usePatientSearch.ts
    |-- /pages
    |   |-- DashboardPage.tsx
    |   |-- LoginPage.tsx
    |   |-- PatientListPage.tsx
    |   |-- PatientPage.tsx
    |   |-- PatientRecordsPage.tsx
    |   |-- PatientSearchPage.tsx
    |   |-- ProfilePage.tsx
    |-- /services
    |   |-- api.ts
    |   |-- auth.ts
    |-- /styles
    |   |-- index.css
    |   |-- /components
    |       |-- AuthWrapper.css
    |       |-- Dashboard.css
    |-- /tests
    |   |-- App.test.tsx
    |   |-- /components
    |       |-- AuthWrapper.test.tsx
    |       |-- Dashboard.test.tsx
    |-- /utils
        |-- calculateAge.ts
        |-- formatDate.ts
```

### Backend

```plaintext
/backend
|-- package-lock.json
|-- package.json
|-- tsconfig.json
|-- /src
|   |-- index.ts
|   |-- /config
|   |   |-- authConfig.ts
|   |   |-- database.ts
|   |   |-- server.ts
|   |-- /controllers
|   |   |-- authController.ts
|   |   |-- patientController.ts
|   |-- /middleware
|   |   |-- authMiddleware.ts
|   |   |-- azureAdMiddleware.ts
|   |   |-- errorHandler.ts
|   |-- /models
|   |   |-- patientModel.ts
|   |   |-- userModel.ts
|   |-- /routes
|   |   |-- authRoutes.ts
|   |   |-- patientRoutes.ts
|   |-- /services
|   |   |-- authService.ts
|   |   |-- patientService.ts
|   |-- /types
|       |-- /express
|           |-- index.d.ts
```

## Installation

### Frontend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/patient-data-management.git
   cd patient-data-management/frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Tailwind CSS:**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Update `tailwind.config.js` and `src/index.css`** with Tailwind CSS configuration.

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd ../backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up TypeScript:**

   ```bash
   npm install -D typescript @types/node @types/express ts-node
   ```

4. **Create `tsconfig.json`** with the following content:

   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     }
   }
   ```

5. **Create a `.env` file** with your MongoDB connection string:

   ```.env
   MONGO_URI=your_mongo_connection_string
   ```

## Usage

### Frontend Usage

```bash
cd frontend
npm start
```

### Backend Usage

```bash
cd backend
npm run dev
```

## Testing

### Frontend Testing

```bash
cd frontend
npm test
```

### Backend Testing

```bash
cd backend
npm test
```

## Contributing

We welcome contributions! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the GNU General Public License (GPL). See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or concerns, please request good vibes on facebook or something, idk.
