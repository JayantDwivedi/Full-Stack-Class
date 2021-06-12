// require express module
const express = require("express");

// initialize the express app

const app = express();

// create data
const courses = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "JS",
  },
  {
    id: 3,
    name: "JAVA",
  },
];

// get request for RESTAPI
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// home route
app.get("/", (req, res) => {
  res.send(
    '<h3 style="color:orange">Basic CRUD Operations using RESTful Services with ExpressJS</h3>'
  );
});

// Reading specific data
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course with given id not found ");
  res.send(course);
});

// We are creating middleware for app.use() in use
app.use(express.json);

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
    //parsing json object and for this we must use app.use(express.json());
  };
  courses.push(course);
  res.send(course);
});

// listen the server
app.listen(3000, () => {
  console.log("server running at 3000");
});
