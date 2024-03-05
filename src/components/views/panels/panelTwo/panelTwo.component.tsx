import React from "react";
import "./panelTwo.css";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

function PanelTwo({ setPersonalPanel }: PanelOneProps) {
  return (
    <>
      <article>
        <section className="">
          <a
            target="_blank"
            href="http://im-not-netflix.vercel.app"
            rel="noreferrer"
          >
            im-not-netflix.app
          </a>
        </section>

        <section>
          <a
            target="_blank"
            href="http://the-kitten-api.vercel.app"
            rel="noreferrer"
          >
            the-kitten-api.app
          </a>
        </section>
        <section className="solarsystem">
          <a
            target="_blank"
            href="https://solarsystem.aitorpsanchez.dev/"
            rel="noreferrer"
          >
            solarsystem.aitorpsanchez.dev
          </a>
        </section>
      </article>
      <span>Those are a few</span>
      <span>projects</span>
      <span>I've developed.</span>
    </>
  );
}

export default PanelTwo;
