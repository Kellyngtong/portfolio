import React from "react";
import "./panelOne.css";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

const PanelOne = ({ setPersonalPanel }: PanelOneProps) => {
  return (
    <>
      <article>
        <span> Welcome,</span>
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

export default PanelOne;
