import './App.css'          // adding link of external css file 
import FunctionalComponent from './component/functionalComponent';
import ClassComponent from './component/classComponent';
import ReactState from './component/ReactState';


const name = "Jayant"          // declare as a variable
const boolean = true;
const imageSource = "https://app.gotowebinar.com/4.8.3-pre.1/images/gtw-logo-32.png";
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
  color: 'red',
  backgroundColor: 'yellow',
  display: 'inlineBlock',
  padding: '5px',
  borderRadius: '10px',
}




function App() {
  return (                     // using variable in document
    <div className="App">
      <FunctionalComponent
        name="Jayant" />

      <ClassComponent rollno="27" />

      <ReactState rollno="23" name="kartik" />

    </div>
  );
}

export default App;
