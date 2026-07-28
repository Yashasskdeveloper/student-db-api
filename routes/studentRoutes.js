const express = require("express");

const router = express.Router();




const {
    getStudents,
    addStudent,
    getStudent,
    updateStudent
} = require("../controllers/studentController");

router.get("/", getStudents);

router.post("/", addStudent);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);

module.exports = router;