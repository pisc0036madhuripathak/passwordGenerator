import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let counter = 15;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    // console.log("cliked", counter);
    // counter = counter + 1;
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    /*usestate used for sending bunch of request */
    // if (counter < 20) {
    //   setCounter(counter + 1);
    // }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>React project</h1>
      <h2>Counter value : {counter}</h2>
      <h2>Counter value1 : {counter}</h2>
      <h2>Counter value2 : {counter}</h2>
      <h2>Counter value3 : {counter}</h2>
      <h2>Counter remove value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
