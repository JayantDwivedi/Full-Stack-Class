import './App.css'          // adding link of external css file 

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
      {/* name as varibale  */}
      {/* using internal css  */}
      <h1>Hello <span style={cssStyle}>{name}</span></h1>

      {/* boolean as variable and condition  */}
      <h2>I am a {boolean == 1 ? "Good" : "Wrong"} Person.</h2>

      {/* link as variable and imageSource as variable    */}
      <a href={link}>
        <img src={imageSource} alt="Goto webinar image" />
      </a>

      {/* adding whole list as element */}
      <h3>Course Topics</h3>
      {element}
    </div>
  );
}

export default App;
