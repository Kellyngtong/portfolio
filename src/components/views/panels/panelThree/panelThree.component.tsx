import React from "react";
import "./panelThree.css";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

const PanelThree = ({ setPersonalPanel }: PanelOneProps) => {
  return (
    <>
      <article>
        <span>Hello,</span>
        <span>Aitor here</span>
      </article>
      <span>I made this portfolio</span>
      <span>To</span>
      <span>
        Apply on{" "}
        <b
          onClick={() => {
            setPersonalPanel(false);
          }}
        >
          Qraneos. S.L.
        </b>
      </span>
      <span>Enjoy it!</span>
    </>
  );
};

export default PanelThree;
