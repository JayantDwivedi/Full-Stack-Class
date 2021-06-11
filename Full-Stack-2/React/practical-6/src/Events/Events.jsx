import React from "react";
import { useState } from "react";
// import { Table, Form, Button } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";

export default function Event() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [count, setCount] = useState(2);
  const [row, setRow] = useState(
    <tr>
      <th>1.</th>
      <th>Jayant</th>
      <th>1234r</th>
      <th>jayant.gla_cs18@gmail.com</th>
    </tr>
  );

  const inputUsername = (e) => {
    setName(e.target.value);
  };

  const inputPassword = (e) => {
    setPass(e.target.value);
  };

  const inputEmail = (e) => {
    setMail(e.target.value);
  };

  const dataSubmit = () => {
    if (name == "" || mail == "" || pass == "") {
      alert("Invalid Information");
    }

    setRow(
      <>
        {row}
        <tr>
          <th>{count}</th>
          <th>{name}</th>
          <th>{pass}</th>
          <th>{mail}</th>
        </tr>
      </>
    );

    setName("");
    setMail("");
    setPass("");
    setCount(count + 1);
  };

  return (
    <>
      <h1>React Events</h1>

      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group
          controlId="formBasicEmail"
          className="inputlabel"
        >
          <ReactBootstrap.Form.Label className="input">
            UserName
          </ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="text"
            placeholder="Username"
            onChange={inputUsername}
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Form.Group
          controlId="formBasicPassword"
          className="inputlabel"
        >
          <ReactBootstrap.Form.Label className="input">
            Password
          </ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="password"
            placeholder="Password"
            onChange={inputPassword}
          />
        </ReactBootstrap.Form.Group>
        <ReactBootstrap.Form.Group
          controlId="formBasicPassword"
          className="inputlabel"
        >
          <ReactBootstrap.Form.Label className="input">
            Email
          </ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="text"
            placeholder="Email"
            onChange={inputEmail}
          />
        </ReactBootstrap.Form.Group>

        <button type="button" onClick={dataSubmit}>
          Submit
        </button>
      </ReactBootstrap.Form>

      <ReactBootstrap.Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Srno.</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </ReactBootstrap.Table>
    </>
  );
}
