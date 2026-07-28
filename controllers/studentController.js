const studentModel = require("../models/studentModel");

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

module.exports = {
    getStudents
};