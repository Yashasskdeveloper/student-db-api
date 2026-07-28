const studentModel = require("../models/studentModel");

// GET all students
const getStudents = (req, res) => {

    studentModel.getAllStudents((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json(results);

    });

};

// POST new student
const addStudent = (req, res) => {

    const student = req.body;

    studentModel.addStudent(student, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(201).json({
            message: "Student Added Successfully",
            studentId: result.insertId
        });

    });

};
// Get student by ID
const getStudent = (req, res) => {

    const id = req.params.id;

    studentModel.getStudentById(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json(results[0]);

    });

};

module.exports = {
    getStudents,
    addStudent,
    getStudent
};