# React + TypeScript + Vite Project

## Project Overview

A modern web application built with React, TypeScript, and Vite, featuring authentication, dashboard, and settings pages with dark mode support.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/vohavinhtan01012001/react-dashboard-settings
cd react-dashboard-settings
```

2. Install dependencies:
```
npm install
# or
yarn install
```
3. Start the development server:
```
npm run dev
# or
yarn dev
```
4. Open your browser and visit: http://localhost:5173
5. Login Credentials
Use the following test credentials to access the system:
```
Email: admin@gmail.com
```
```
Password: 123456
```

### Description of Main Pages <br/>
- Login: The login page where you enter your email and password to access the system. <br/>
- Dashboard: The main page after login, displaying sample data in Cards, with an Approval button and a view button that opens a modal. <br/>
- Settings: The page to update personal information (Name, Email, Password) with a form that includes validation. Also includes a Dark Mode toggle button. <br/>

###  Assumptions and Simplifications <br/>
- Dashboard data is static and does not fetch from a real API. <br/>
- The Settings form does not submit data to a server, it only shows a success notification. <br/>
- Dark Mode state is temporarily saved with Zustand and is not persisted in localStorage. <br/>
- Sidebar is responsive in a simple way and does not include advanced animations.<br/>
- Login authenticates based on hardcoded data and does not connect to real authentication API or system.<br/>

###  Reasons for Technology and Pattern Choices <br/>
- React Hook Form + Zod: Efficient form management and validation, code is easy to read and maintain.<br/>
- Shadcn UI: Well-structured components, integrates well with Tailwind, supports accessibility.<br/>
- Zustand: Lightweight and simple state management suitable for small projects.<br/>
- Tailwind CSS: Enables fast UI development and easy responsive design.<br/>