# Nexus Contact Manager API

Nexus is a **Node.js/Express backend project** that provides a secure Contact Manager API.
It implements core Express concepts, MongoDB/Mongoose integration, full CRUD functionality, User Authentication, Password Hashing, and JWT Token protection for all routes.

---

## 🚀 Features

* User Registration & Login with JWT Authentication
* Password Hashing with **bcrypt**
* CRUD operations for managing contacts
* Protected routes with JWT middleware
* Centralized Error Handling
* MongoDB integration with Mongoose

---

## 📂 Project Structure

```
mycontacts_backend/
│── config/
│   └── mongodbconnection.js
│── controllers/
│   ├── contactController.js
│   └── userController.js
│── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
│── models/
│   ├── contactModel.js
│   └── userModel.js
│── routes/
│   ├── contactsRoute.js
│   └── userRoutes.js
│── server.js
│── .env.example
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nexus.git
cd nexus
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root folder

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

*(Make sure you never commit your real `.env`. Instead, edit `.env.example` with placeholders.)*

### 4. Run the server

For development with **nodemon**:

```bash
npm run dev
```

For production:

```bash
npm start
```

---

## 📌 API Endpoints

### 🔑 User Routes

* **POST** `/api/users/register` → Register new user
* **POST** `/api/users/login` → Login user & get JWT
* **GET** `/api/users/current` → Get current logged-in user (protected)

### 📇 Contact Routes (protected)

* **GET** `/api/contacts` → Get all contacts of logged-in user
* **POST** `/api/contacts` → Create new contact
* **GET** `/api/contacts/:id` → Get single contact
* **PUT** `/api/contacts/:id` → Update contact
* **DELETE** `/api/contacts/:id` → Delete contact

---

## 🛠️ Tech Stack

* **Node.js** & **Express.js**
* **MongoDB** with **Mongoose**
* **JWT** for Authentication
* **bcrypt** for Password Hashing
* **dotenv** for environment variables
* **nodemon** for development

---

## 🧪 Testing the API

You can test the API using:

* [Thunder Client](https://www.thunderclient.com/) (VSCode extension)
* [Postman](https://www.postman.com/)
* cURL in terminal

Example request (register user):

```bash
POST http://localhost:5000/api/users/register
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "mypassword"
}
```
