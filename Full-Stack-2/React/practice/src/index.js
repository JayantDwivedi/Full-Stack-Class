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
// const thirdBook = {
//   title: "One Arranged Marrige",
//   author: "Chetan Bhagat",
//   image:
//     "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61r-WomIz0L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FOne-Arranged-Murder-Chetan-Bhagat%2Fdp%2F1542094135&tbnid=fRPXZJQpXytgdM&vet=12ahUKEwju_Zqag4jvAhUYCXIKHdcmAAAQMygAegUIARCbAQ..i&docid=qLGWBD9qaIBoXM&w=660&h=1057&q=one%20arranged%20marriage&ved=2ahUKEwju_Zqag4jvAhUYCXIKHdcmAAAQMygAegUIARCbAQ",
// };

// use of javascript jsx
// const title = "Book 1";
// const author = "Mr. X";
// const img =
//   "https://m.media-amazon.com/images/I/91CQ7MCHIfL._AC_UY327_FMwebp_QL65_.jpg";

// creating an object and pass into props
// after making this we just simply add data into this objects
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51RyuFPuxjL._AC_SX184_.jpg",
    title: "Young Gift and Black",
    author: "Jamia Wilson",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51zaYM+my1L._AC_SX184_.jpg",
    title: "Antiracist Baby Picture",
    author: "Ibram X. Kendi Ashley",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._AC_SX184_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
];

function MiniBook() {
  return (
    <div>
      {/* <Book image={img} title="Book Another" />
      <Book image={img} title="Book Previous" author="Jayant Dwivedi" />
      <Book
        title={thirdBook.title}
        image={thirdBook.image}
        author={thirdBook.author}
      /> */}

      {/* Adding this book has description others don't 
      with the use of props children  we use opening and closing tags instead of self closing*/}
      {/* <Book title={thirdBook.title} image={img} author={thirdBook.author}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          facilis, nobis ea aperiam in suscipit laboriosam nulla animi accusamus
          eveniet.
        </p>
      </Book> */}
      {/* calling names from names list  */}
      {/* <h4>Simple list objects</h4>
      <h4>{names}</h4>

      <h4>List names one by one</h4>
      {newName} */}

      {/* using of object as props  */}
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </div>
  );
}

// Try to render simple list on our webpage
// const names = ["Jayant", "Kartik", "Harsh", "Hitesh"];

// create a map function to fetch single single values from list
// notice the return name and argument passed
// const newName = names.map((name) => {
//   return <h1>{name}</h1>;
// });

// Main Component
const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <>
      <article className="booklist">
        <img src="{img}" />
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>
    </>
  );
};

ReactDom.render(<MiniBook />, document.getElementById("root"));
