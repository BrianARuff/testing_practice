import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount ] = useState(0);
  const handleSetCount = () => {
    setCount( ++count);
  }
  return (
    <div className="App">
      <button onClick={handleSetCount}>Increment +1</button>
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
