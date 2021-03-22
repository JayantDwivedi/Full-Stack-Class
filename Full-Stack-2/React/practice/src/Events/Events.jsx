import React from "react";
import { useState } from "react";

export default function Events() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();

  const click = (e) => {
    console.log(e);
    alert("Alert for Clicked Event");
  };

  const changeFname = (e) => {
    e.preventDefault();
    setFname(e.target.value);
  };

  const changeLname = (e) => {
    setLname(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(submitFeild);
  };

  const [submitFeild, setSubmitFeild] = useState();
  const changeHandler = (e) => {
    setSubmitFeild(e.target.value);
  };

  return (
    <div>
      <h1>On Click Event</h1>
      <button onClick={click}>Click Me</button>

      <h1>On Change Event</h1>
      <p>
        Enter Something <input type="text" onChange={changeFname} />{" "}
        <input type="text" onChange={changeLname} />
      </p>
      <h1>First Name : {fname}</h1>
      <h1>Last Name : {lname}</h1>

      <h1>On Submit Event</h1>
      <form action="" onSubmit={submit}>
        <input type="text" onChange={changeHandler} />
        <input type="submit" />
      </form>
    </div>
  );
}
