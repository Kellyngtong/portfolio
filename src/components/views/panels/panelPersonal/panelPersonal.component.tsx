import React from "react";
import "./panelPersonal.css";

interface PanelPersonalProps {
  actualPanel: number;
}

const PanelPersonal = ({ actualPanel }: PanelPersonalProps) => {
  return (
    <>
      <img src="https://picsum.photos/200" alt="placeholder" />
      {actualPanel !== 0 && <span>Aitor Peña - Web-dev</span>}
      <div>
        <img src="https://picsum.photos/50" alt="" />
        <img src="https://picsum.photos/50" alt="" />
        <img src="https://picsum.photos/50" alt="" />
      </div>
    </>
  );
};

export default PanelPersonal;
