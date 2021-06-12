const express = require("express");
const app = express();

const student = [{
  rollno: 1,
  name: "Jayant",
  course: "B.tech",
}, ];

app.use(express.json());

//Get method
app.get("/", (req, res) => {
  res.send(student);
});

// Post method
app.post("/enterdetails", (req, res) => {
  const detail = {
    rollno: student.length + 1,
    name: req.body.name,
    course: req.body.course,
  };
  student.push(detail);
  res.send(student);
});

// delete operation
app.delete("/delete/:name", (req, res) => {
  const detail = student.find((c) => c.name === req.params.name);
  if (!detail) return res.status(404).send("Name not found");
  const index = student.indexOf(detail);
  student.splice(index, 1);
  res.send(detail);
});

// update operation
app.put("/update/:name", (req, res) => {
  const detail = student.find((c) => c.name === req.params.name);
  if (!detail) return res.status(404).send("Update name not found");
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

  // update student
  detail.name = req.body.name;
  res.send(detail);
});

// App listen at port 3000
app.listen(3000, () => {
  console.log("App started on 3000 port");
});