// step 1 : imprts
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const Student = require("./models/student");

// step2 db connections

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mernp");
mongoose.connection.on("connected", () => {
  console.log("Database connected");
});
mongoose.connection.on("error", () => {
  console.log("Error occured");
});

//steps 3 middleware
app.use(cors());
app.use(express.json());

// step 4 routes

app.get("/", (req, res) => {
  Student.find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post("/students", (req, res) => {
  console.log(req.body.firstname);
  console.log(req.body.lastname);
  console.log(req.body.palce);

  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    place: req.body.place,
  });

  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        msg: "sucessfully submitted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "Error occured",
      });
    });

  res.send("ok");
});

app.delete("/student/:id", (req, res) => {
  const id = req.params.id;
  Student.remove(
    {
      _id: id,
    },
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("error occured");
      } else {
        res.status(200).json({ msg: "sucessfully deleted" });
      }
    }
  );
});

app.put("/student/:id", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const place = req.body.place;
  const id = req.params.id;
  Student.update(
    { _id: id },
    { $set: { firstname: firstname, lastname: lastname, place: place } }
  )
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "sucessfully submit" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occured" });
    });
});

// step5 server
app.listen(5000, () => {
  console.log("server connected on 5000");
});
