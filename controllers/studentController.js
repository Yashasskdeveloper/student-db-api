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

// Update student
const updateStudent = (req, res) => {

    const id = req.params.id;
    const student = req.body;

    studentModel.updateStudent(id, student, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json({
            message: "Student Updated Successfully"
        });

    });

};

// Delete student
const deleteStudent = (req, res) => {

    const id = req.params.id;

    studentModel.deleteStudent(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json({
            message: "Student Deleted Successfully"
        });

    });

};

module.exports = {
    getStudents,
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent
};