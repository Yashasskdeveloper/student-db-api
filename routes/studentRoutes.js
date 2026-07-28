const express = require("express");

const router = express.Router();




const {
    getStudents,
    addStudent,
    getStudent
} = require("../controllers/studentController");

router.get("/", getStudents);

router.post("/", addStudent);
router.get("/:id", getStudent);

module.exports = router;