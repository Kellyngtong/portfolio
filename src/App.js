import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.component.tsx";
import Panel from "./components/panel/panel.component.tsx";
import PanelOne from "./components/views/panels/panelOne/panelOne.component.tsx";
import PanelPersonal from "./components/views/panels/panelPersonal/panelPersonal.component.tsx";
import PanelTwo from "./components/views/panels/panelTwo/panelTwo.component.tsx";
import PanelThree from "./components/views/panels/panelThree/panelThree.component.tsx";
import PanelFour from "./components/views/panels/panelFour/panelFour.component.tsx";

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
          <Panel customClass="panel-PanelTwo">
            <PanelTwo />
          </Panel>
        )}
        {actualPanel === 2 && (
          <Panel customClass="panel-PanelThree">
            <PanelThree />
          </Panel>
        )}
        {actualPanel === 3 && (
          <Panel customClass="panel-PanelFour">
            <PanelFour />
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
