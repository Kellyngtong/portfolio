import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.component.tsx";
import Panel from "./components/panel/panel.component.tsx";
import PanelOne from "./components/views/panels/panelOne/panelOne.component.tsx";
import PanelPersonal from "./components/views/panels/panelPersonal/panelPersonal.component.tsx";

function App() {
  const [actualPanel, setActualPanel] = useState(0);

  const [personalPanel, setPersonalPanel] = useState(true);

  useEffect(() => {}, [actualPanel]);

  return (
    <div className="App">
      <Navbar element="hola" setter={setActualPanel} getter={actualPanel} />
      <section className="app-section">
        {actualPanel === 0 && (
          <Panel customClass="panel-PanelOne">
            <PanelOne setPersonalPanel={setPersonalPanel} />
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
        {personalPanel ? (
          <Panel customClass="rightPanel personal-panel">
            <PanelPersonal actualPanel={actualPanel} />
          </Panel>
        ) : (
          <Panel customClass="rightPanel">
            <header className="header-qraneos">
              <div
                onClick={() => {
                  setPersonalPanel(true);
                }}
              >
                X
              </div>
            </header>
            <iframe src="https://qraneos.com/"></iframe>
          </Panel>
        )}
      </section>
    </div>
  );
}

export default App;
