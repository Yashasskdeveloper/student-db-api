const express = require("express");
require("dotenv").config();

require("./config/db");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Student Database API"
    });
});

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
