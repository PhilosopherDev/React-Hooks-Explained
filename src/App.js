import { useState } from "react";
import Counter from "./Hooks/Counter";
import Counter2 from "./Hooks/Counter2";
import Info from "./Hooks/Info";
import Info2 from "./Hooks/Info2";
import Average from "./Hooks/Average";

function App() {

  const [hook, setHook] = useState(null);


  return (
    <div className="App">
      <div style={{marginBottom: "10px"}}>
        <button onClick={() => setHook("useState")}>Counter (useState)</button>
        <button onClick={() => setHook("useEffect")}>Info (useEffect)</button>
        <button onClick={() => setHook("useReducer")}>Counter2 (useReducer)</button>
        <button onClick={() => setHook("useReducer2")}>Info2 (useReducer)</button>
        <button onClick={() => setHook("useMemo")}>Average (useMemo, useCallback)</button>
      </div>
      <div>
        {hook === "useState" ? <Counter /> : null}
        {hook === "useEffect" ? <Info /> : null}
        {hook === "useReducer" ? <Counter2 /> : null}
        {hook === "useReducer2" ? <Info2 /> : null}
        {hook === "useMemo" ? <Average /> : null}
      </div>
    </div>
  );
}

export default App;
