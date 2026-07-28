# 🎓 Student Database API

A RESTful API built using **Node.js**, **Express.js**, and **MySQL** to perform CRUD (Create, Read, Update, Delete) operations on student records.

---

## 📌 Features

- Get all students
- Get a student by ID
- Add a new student
- Update student details
- Delete a student
- MySQL database integration
- MVC Architecture
- REST API

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MySQL
- dotenv
- Git & GitHub
- Thunder Client (API Testing)

---

## 📁 Project Structure

```
student-db-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── studentModel.js
│
├── routes/
│   └── studentRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Yashasskdeveloper/student-db-api.git
```

### Go to project directory

```bash
cd student-db-api
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_db
PORT=3000
```

### Start the server

```bash
node server.js
```

Server will start on:

```
http://localhost:3000
```

---

## 🗄️ Database

Create a database named:

```sql
student_db
```

Create the table:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    course VARCHAR(100) NOT NULL
);
```

---

# 📡 API Endpoints

## 1. Get All Students

**GET**

```
/students
```

Response

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 20,
    "course": "Computer Science"
  }
]
```

---

## 2. Get Student By ID

**GET**

```
/students/:id
```

Example

```
/students/1
```

---

## 3. Add Student

**POST**

```
/students
```

Request Body

```json
{
  "name": "Yashas",
  "email": "yashas@gmail.com",
  "age": 21,
  "course": "Computer Science"
}
```

Response

```json
{
  "message": "Student Added Successfully",
  "studentId": 1
}
```

---

## 4. Update Student

**PUT**

```
/students/:id
```

Request Body

```json
{
  "name": "Yashas SK",
  "email": "yashas.sk@gmail.com",
  "age": 22,
  "course": "Backend Development"
}
```

Response

```json
{
  "message": "Student Updated Successfully"
}
```

---

## 5. Delete Student

**DELETE**

```
/students/:id
```

Response

```json
{
  "message": "Student Deleted Successfully"
}
```

---

# 🧪 Testing

You can test the API using:

- Thunder Client (VS Code)
- Postman

---

# 🚀 Future Improvements

- Input Validation
- JWT Authentication
- Password Encryption (bcrypt)
- User Login & Registration
- Error Handling Middleware
- Pagination
- Search & Filter
- Docker Support

---

# 👨‍💻 Author

**Yashas SK**

GitHub: https://github.com/Yashasskdeveloper

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!