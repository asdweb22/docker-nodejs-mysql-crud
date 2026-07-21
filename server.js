import express from "express";
import db from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Student Management API using Node.js + MySQL + Docker"
    });
});

// GET ALL STUDENTS
app.get("/students", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM students");
        res.json(rows);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// GET STUDENT BY ID
app.get("/students/:id", async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM students WHERE id=?",
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(rows[0]);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// CREATE STUDENT
app.post("/students", async (req, res) => {

    const { name, age, course } = req.body;

    try {

        const [result] = await db.query(
            "INSERT INTO students(name,age,course) VALUES(?,?,?)",
            [name, age, course]
        );

        res.status(201).json({
            message: "Student created successfully",
            id: result.insertId
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// UPDATE STUDENT
app.put("/students/:id", async (req, res) => {

    const { name, age, course } = req.body;

    try {

        const [result] = await db.query(
            "UPDATE students SET name=?, age=?, course=? WHERE id=?",
            [name, age, course, req.params.id]
        );

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.json({
            message: "Student updated successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// DELETE STUDENT
app.delete("/students/:id", async (req, res) => {

    try {

        const [result] = await db.query(
            "DELETE FROM students WHERE id=?",
            [req.params.id]
        );

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.json({
            message: "Student deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});