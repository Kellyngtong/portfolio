import React from "react";
import "./panelTwo.css";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

function PanelTwo({ setPersonalPanel }: PanelOneProps) {
  return (
    <>
      <article>
        <a
          target="_blank"
          href="http://im-not-netflix.vercel.app"
          rel="noreferrer"
        >
          im-not-netflix.vercel.app
        </a>
        <span>
          <a
            target="_blank"
            href="http://the-kitten-api.vercel.app"
            rel="noreferrer"
          >
            the-kitten-api.vercel.app
          </a>
        </span>
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
}

export default PanelTwo;
