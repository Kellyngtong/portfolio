import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.component.tsx";
import Panel from "./components/panel/panel.component.tsx";

function App() {
  const [actualPanel, setActualPanel] = useState(0);

  useEffect(() => {}, [actualPanel]);

  return (
    <div className="App">
      <Navbar element="hola" setter={setActualPanel} getter={actualPanel} />
      <section className="app-section">
        {actualPanel === 0 && (
          <Panel customClass="">
            <button
              onClick={() => {
                setActualPanel(actualPanel + 1);
              }}
            >
              primera prueba {actualPanel}
            </button>
            <div>lorem ipsum</div>
          </Panel>
        )}
        {actualPanel === 1 && (
          <Panel customClass="">
            <button
              onClick={() => {
                setActualPanel(actualPanel + 1);
              }}
            >
              segunda prueba {actualPanel}
            </button>
            <div>lorem ipsum</div>
          </Panel>
        )}
        {actualPanel === 2 && (
          <Panel customClass="">
            <button
              onClick={() => {
                setActualPanel(actualPanel + 1);
              }}
            >
              tercera prueba {actualPanel}
            </button>
            <div>lorem ipsum</div>
          </Panel>
        )}
        {actualPanel === 3 && (
          <Panel customClass="">
            <button
              onClick={() => {
                setActualPanel(actualPanel + 1);
              }}
            >
              cuarta prueba {actualPanel}
            </button>
            <div>lorem ipsum</div>
          </Panel>
        )}
        <Panel customClass="rightPanel">
          <div>lorem ipsum</div>
        </Panel>
      </section>
    </div>
  );
}

export default App;
