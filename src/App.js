import React from "react";
import { store } from "./Redux/store";
import { incCount } from "./Redux/action";


function App() {

 // let [count, setCount] = React.useState(0);

const hanldeInc = () => {

  store.dispatch(incCount(1))
 // setCount(count + 1)

}

// getting the store value
// store.getState()

console.log("current store value is " , store.getState());

  return (
    <div className="App">
        <h1>Cout is {store.getState().count}</h1>

        <button onClick={hanldeInc}>Increament</button>
    </div>
  );
}

export default App;
