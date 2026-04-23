// Import the express module
const express = require("express");

// Create an Express application instance
const app = express();

app.use(express.json());

const studentInfo = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Charlie", age: 22, grade: "C" },
];

app.get("/studentinfo", (req, res) => {
  res.status(200).json(studentInfo);
});

app.get("/studentInfo/:grade", (req, res) => {
  const grade = req.params.grade;
  const student = studentInfo.find((el) => el.grade === grade);

  if (!student) {
    res.status(404).json({ Error: "Student not found" });
  }
  res.status(200).json(student);
});

app.get("/all-data", (req, res) => {
  res.json(studentInfo[0]);
});

// Define a route handler for GET requests to /
app.get("/", function (req, res) {
  res.send("Welcome to the server!");
});

app.get("/about", (request, response) => {
  response.send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

// Start listening on port 3000
app.listen(3000, function () {
  console.log("Server is up and running!");
});
