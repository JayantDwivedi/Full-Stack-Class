import React from "react";
import { useState } from "react";
// import { Table, Form, Button } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";

export default function Event() {
  // const [detail, setDetail] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  // });

  const [detail, setDetail] = useState([
    {
      id: 1,
      username: "Jayant",
      email: "jayant12@gmail.com",
      password: "jayant123@",
    },
    {
      id: 2,
      username: "Manish Kumar",
      email: "manishkumar.23@gmail.com",
      password: "manish456",
    },
    {
      id: 3,
      username: "Sachin Yadav",
      email: "sachin.hero@outlook.com",
      password: "sachin789",
    },
  ]);

  const renderDetail = (detail, index) => {
    return (
      <tr key={index}>
        <td>{detail.id}</td>
        <td>{detail.username}</td>
        <td>{detail.password}</td>
        <td>{detail.email}</td>
      </tr>
    );
  };

  // const inputUsername = (e) => {
  //   setDetail({ ...detail, username: e.target.value });
  // };

  // const inputPassword = (e) => {
  //   setDetail({ ...detail, password: e.target.value });
  // };

  // const inputEmail = (e) => {
  //   setDetail({ ...detail, email: e.target.value });
  // };

  // const dataSubmit = () => {
  //   sessionStorage.setItem("mydata", JSON.stringify(detail));

  //   let detailGetBack = sessionStorage.getItem("mydata");
  //   detailGetBack = JSON.parse(detailGetBack);

  //   console.log(
  //     detailGetBack.username + " " + detail.password + " " + detail.email
  //   );
  //   alert("data uploaded");
  // };

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
            // onChange={inputUsername}
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
            // onChange={inputPassword}
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
            // onChange={inputEmail}
          />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Button variant="primary" type="submit">
          Submit
        </ReactBootstrap.Button>
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
        <tbody>{detail.map(renderDetail)}</tbody>
      </ReactBootstrap.Table>
    </>
  );
}
