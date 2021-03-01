import React from "react";
import { useState } from "react"; // import for hooks
import { useEffect } from "react"; // use for life cycle function

const ReactHooks = () => {
  // React hooks using useState function
  const [name, setName] = useState("Jayant");
  const [rollno, setRoll] = useState(0);

  function hookbutton() {
    setName("Pankaj");
    setRoll(23);
  }

  useEffect(() => {
    alert("Hello");
    console.log("work as DidMount Function");
  });
  return (
    <div>
      <h1>This is react hooks</h1>
      <h4>Student Name :{name}</h4>
      <h4>Student RollNo: {rollno}</h4>
      <button onClick={hookbutton}>Click Me for Hook up</button>
    </div>
  );
};

export default ReactHooks;
