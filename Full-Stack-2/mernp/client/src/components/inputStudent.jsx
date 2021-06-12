import React, { Component, useState, useEffect } from "react";
import axios from "axios";

export default function InputStudent() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [place, setplace] = useState("");

  function f_name(e) {
    setfirstName(e.target.value);
  }

  function f_lastname(e) {
    setlastName(e.target.value);
  }

  function f_place(e) {
    setplace(e.target.value);
  }

  function addUser(e) {
    if (firstname === "" || lastname === "" || place === "") {
      alert("Invalid Input");
      return;
    } else {
      axios
        .post("http://localhost:5000/students", firstname, lastname, place)
        .then((res) => {
          console.log("Data posted");
        });
    }
  }

  return (
    <>
      <h1>React Dynamic Table</h1>
      <section id="insert">
        <form>
          <input
            type="text"
            required
            onChange={f_name}
            value={firstname}
            placeholder="firstname"
          ></input>

          <input
            type="text"
            required
            onChange={f_lastname}
            value={lastname}
            placeholder="lastname"
          ></input>

          <input
            type="text"
            required
            onChange={f_place}
            value={place}
            placeholder="place"
          ></input>
          <button type="button" onClick={addUser}>
            ADD USER
          </button>
        </form>
      </section>
      <section>
        <h1>{firstname}</h1>
        <h1>{lastname}</h1>
        <h1>{place}</h1>
      </section>
    </>
  );
}
