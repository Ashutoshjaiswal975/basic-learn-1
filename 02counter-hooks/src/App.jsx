import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Declare a state variable 'count' with an initial value of 5
  // 'setCount' is a function to update 'count'
  const [count, setCount] = useState(5);

  // Function to increase the counter value
  const addValue = () => {
    console.log("value added", count); // Log current value before updating
    setCount(count + 1); // Update the state by adding 1
  };

  // Function to decrease the counter value
  function removeValue() {
    setCount(count - 1); // Update the state by subtracting 1
    console.log("value subtract", count); // Log current value before updating
  }

  return (
    <>
      {/* Heading for the app */}
      <h1>Ashu and React</h1>

      {/* Display the current counter value */}
      <h2>Counter value: {count}</h2>

      {/* Button to increase counter */}
      <button onClick={addValue}>Add value</button>
      <br />

      {/* Button to decrease counter */}
      <button onClick={removeValue}>Remove value</button>

      {/* Display the counter value in the footer */}
      <p>Footer: {count}</p>
    </>
  );
}

export default App
