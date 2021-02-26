import React from "react"; // this is ES6 functionality
import ReactDom from "react-dom"; // for render method

// CSS
import "./index.css";

// component for nested component
// const Person = () => <h1>Explicit Message</h1>; // explicit return
// const Message = () => {
//   // implicit return
//   return <h1>This is my implicit message</h1>;
// };

// first letter is capital so that it is a component
// stateless function or dumped function
// this is a component
// function Greeting() {
//   return (
//     <div>
//       <Person /> {/* Use of nested explicit component */}
//       <h1>This is Jayant and this is my first component</h1>
//       <Message /> {/* Use of nested implicit component */}
//     </div>
//   );
// }

// arrow function as component
// const Greeting = () => {
//   return <h1>This is a functional compoonent with arrow function</h1>;
// };

// arrow function
// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

// in render method we first pass what is going to render and where it is being render
// ReactDom.render(<Greeting />, document.getElementById("root")); // changing the DOM of the page

// Mini Book Store
// with nesting of other components

// passing props in from of object
const thirdBook = {
  title: "One Arranged Marrige",
  author: "Chetan Bhagat",
  image:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61r-WomIz0L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FOne-Arranged-Murder-Chetan-Bhagat%2Fdp%2F1542094135&tbnid=fRPXZJQpXytgdM&vet=12ahUKEwju_Zqag4jvAhUYCXIKHdcmAAAQMygAegUIARCbAQ..i&docid=qLGWBD9qaIBoXM&w=660&h=1057&q=one%20arranged%20marriage&ved=2ahUKEwju_Zqag4jvAhUYCXIKHdcmAAAQMygAegUIARCbAQ",
};

// use of javascript jsx
const title = "Book 1";
const author = "Mr. X";
const img =
  "https://m.media-amazon.com/images/I/91CQ7MCHIfL._AC_UY327_FMwebp_QL65_.jpg";

function MiniBook() {
  return (
    <div>
      <Book image={img} title="Book Another" />
      <Book image={img} title="Book Previous" author="Jayant Dwivedi" />
      <Book
        title={thirdBook.title}
        image={thirdBook.image}
        author={thirdBook.author}
      />
    </div>
  );
}

// Main Component
const Book = ({ image, author, title }) => {
  return (
    <article className="booklist">
      <img src={image} alt="image of a book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4>Sadguru</h4>
    </article>
  );
};

ReactDom.render(<MiniBook />, document.getElementById("root"));
