const db = require("../config/db");

// Get all students
const getAllStudents = (callback) => {

    const sql = "SELECT * FROM students";

    db.query(sql, callback);

};
// Get student by ID
const getStudentById = (id, callback) => {

    const sql = "SELECT * FROM students WHERE id = ?";

    db.query(sql, [id], callback);

};

// Add new student
const addStudent = (student, callback) => {

    const sql = `
        INSERT INTO students (name, email, age, course)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [student.name, student.email, student.age, student.course],
        callback
    );

};

module.exports = {
    getAllStudents,
    addStudent,
    getStudentById
};