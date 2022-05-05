import { useState, useEffect } from 'react';

import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);

return (
<div classname="App">
  <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
  <span>{counter }</span>
  <button onClick ={() => setCounter((prevCount) => prevCount + 1)}>+ </button>
</div>
);

}

export default App;