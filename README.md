# # Feedre Feedback App

## Overview

Feedre is a comprehensive feedback application built using the MERN stack (MongoDB, Express.js, React, Node.js) and integrates Cloudinary for media management. The app allows students to provide feedback on courses, departments, and teachers.

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Running the Application](#running-the-application)
-   [Folder Structure](#folder-structure)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   User Authentication
-   Role-based Access (Admin, Student, Teacher)
-   Feedback Submission
-   Feedback Management
-   File Upload with Cloudinary

## Tech Stack

-   **Frontend**: React
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Media Management**: Cloudinary

## Prerequisites

-   Node.js
-   npm or yarn
-   MongoDB Atlas Account
-   Cloudinary Account

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Abhijeet-droid-AI/feedre-feedback-app.git
    cd feedre-feedback-app
    ```

2. **Install Dependencies**

    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

## Environment Variables

Create a `.env` file in the root of the `backend` directory and add the following variables:

```env
# MongoDB
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server
PORT=3000
JWT_SECRET=your_jwt_secret
```

## Running the Application

1. **Start the Backend Server**

    ```bash
    cd backend
    npm start
    ```

2. **Start the Frontend Server**
    ```bash
    cd ../frontend
    npm start
    ```

The backend will be running on `http://localhost:3000` and the frontend will be running on `http://localhost:5173`.

## Folder Structure

```
feedre-feedback-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assests/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   └── styles.css
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

Feel free to contribute to the project by reporting issues, suggesting features, or submitting pull requests. Happy coding!
