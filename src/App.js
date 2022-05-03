import { useState } from "react";
import Counter from "./Hooks/Counter";
import Counter2 from "./Hooks/Counter2";
import Info from "./Hooks/Info";

function App() {

  const [hook, setHook] = useState(null);


  return (
    <div className="App">
      <div style={{marginBottom: "10px"}}>
        <button onClick={() => setHook("useState")}>useState</button>
        <button onClick={() => setHook("useEffect")}>useEffect</button>
        <button onClick={() => setHook("useReducer")}>useReducer</button>
      </div>
      <div>
        {hook === "useState" ? <Counter /> : null}
        {hook === "useEffect" ? <Info /> : null}
        {hook === "useReducer" ? <Counter2 /> : null}
      </div>
    </div>
  );
}

export default App;
