import React from "react";
import "./panelTwo.css";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

function PanelTwo({ setPersonalPanel }: PanelOneProps) {
  return (
    <>
      <header>
        <div>
          <h1>Those are a few</h1>
          <h1>projects</h1>
          <h1>I've developed.</h1>
        </div>
      </header>

      <section>
        <article>
          <a
            target="_blank"
            href="https://solarsystem.aitorpsanchez.dev/"
            rel="noreferrer"
          >
            solarsystem.aitorpsanchez.dev
          </a>

          <aside>
            An interactive representation of the solar system Where playing with
            the proportions of speed and time gives an idea of its vastness.
          </aside>
        </article>

        <article>
          <a
            target="_blank"
            href="http://im-not-netflix.vercel.app"
            rel="noreferrer"
          >
            I'm Not Netflix
          </a>
          <aside>
            TMDB API Integration for Displaying New Movie Releases, It've and
            easter egg try to find it !
          </aside>
        </article>

        <article>
          <a
            target="_blank"
            href="http://the-kitten-api.vercel.app"
            rel="noreferrer"
          >
            the-kitten-api.app
          </a>
          <aside>
            My first ever attempt at using React involves simultaneously
            fetching data from the Cat Fact API and the Cat Image API to display
            both on the screen.
          </aside>
        </article>
      </section>
    </>
  );
}

export default PanelTwo;
