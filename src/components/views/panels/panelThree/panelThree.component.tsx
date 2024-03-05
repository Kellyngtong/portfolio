import React from "react";
import "./panelThree.css";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

const PanelThree = ({ setPersonalPanel }: PanelOneProps) => {
  return (
    <>
      <article className="nautico">
        <h1>Real Club Náutico de Gran Canaria</h1>
        <p>
          Not my primary role, but I handle diverse IT support tasks including
          setting up small streaming rooms for events and professional-grade
          equipment for use, alongside software contributions in C# and Odoo
          Modules with Python.
        </p>
      </article>
      <article className="guia">
        <h1> Tourist Informer and Museum Guide</h1>
        <small>*Extensive use of English*</small>
        <p>
          Work experience includes roles at the Painted Cave, Columbus House
          Museum, and Perez Galdos House-Museum, among others.
        </p>
      </article>
    </>
  );
};

export default PanelThree;
