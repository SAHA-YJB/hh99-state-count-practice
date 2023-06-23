import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
    if(count === 5) {
      alert('그만눌러')
    }
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={onClickPlus}>+1</button>
        <button onClick={onClickMinus}>-1</button>
      </div>
    </div>
  );
}

export default App;
