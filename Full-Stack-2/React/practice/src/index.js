import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
// CSS
// import "./index.css";

// import { data } from "./books";
// import SpecificBook from "./Book";
// import { greeting } from "./testing/testing";

// function BookList() {
//   // console.log(greeting);
//   return (
//     // <section className="booklist">
//     //   {data.map((book, index) => {
//     //     return <SpecificBook key={book.id} {...book}></SpecificBook>;
//     //   })}
//     // </section>

//     <App />
//     document.getElementById('root');
//   );
// }

// ReactDom.render(<BookList />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
