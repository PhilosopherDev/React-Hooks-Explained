import { useState } from "react";
import Counter from "./Hooks/Counter";
import Info from "./Hooks/Info";

function App() {

  const [hook, setHook] = useState(null);


  return (
    <div className="App">
      <div style={{marginBottom: "10px"}}>
        <button onClick={() => setHook("useState")}>useState</button>
        <button onClick={() => setHook("useEffect")}>useEffect</button>
      </div>
      <div>
        {hook === "useState" ? <Counter /> : null}
        {hook === "useEffect" ? <Info /> : null}
      </div>
    </div>
  );
}

export default App;
