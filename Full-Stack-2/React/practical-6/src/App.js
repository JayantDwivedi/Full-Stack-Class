import "./App.css"; // adding link of external css file
import FunctionalComponent from "./component/functionalComponent";
import ClassComponent from "./component/classComponent";
import ReactState from "./component/ReactState";

// importing for practical -8
import Counter from "./component/Counter";
import ShowMoreLess from "./component/ShowMoreLess";
import ReactHooks from "./component/ReactHooks";

// importing for react events
import Event from "./Events/Events";

// importing for practical 9
import Practical9 from "./Events/Practical-9/Practical_9";

const name = "Jayant"; // declare as a variable
const boolean = true;
const imageSource =
  "https://app.gotowebinar.com/4.8.3-pre.1/images/gtw-logo-32.png";
const link = "https://www.gotowebinar.com";

const element = (
  <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>MongoDB</li>
    <li>React JS</li>
  </ol>
);

// React follow camelCase character
const cssStyle = {
  color: "red",
  backgroundColor: "yellow",
  display: "inlineBlock",
  padding: "5px",
  borderRadius: "10px",
};

function App() {
  return (
    // using variable in document
    <div className="App">
      {/* <h1>Question 8-A</h1>
      <Counter />
      <hr />
      <h1>Question 8-B</h1>
      <ShowMoreLess /> */}

      {/* <ReactHooks /> */}
      <Event />
      {/* <Practical9 /> */}
    </div>
  );
}

export default App;
