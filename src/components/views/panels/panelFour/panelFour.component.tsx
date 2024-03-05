import React from "react";
import "./panelFour.css";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

const PanelFour = ({ setPersonalPanel }: PanelOneProps) => {
  return (
    <>
      <article>
        <h4>Actualmente cursando 2º DAW y 2ºDAM en simultáneo.</h4>

        <p>
          Proyectos de CRUD a Bases de datos Creación y Consumo de End Points
          (API´s) Realización de Diferentes sitios Webs Aplicación en Java para
          control de tarifas de atraque de una marina náutica. control de
          versiones con Git Aprendiendo React por cuenta propia
        </p>

        <h4>C.P. Nivel 3 Información Turístico y atención al visitante</h4>

        <section>
          <span>certificación de LSE nivel A2</span>
          <span> Inglés Turístico</span>
          <span> Alemán Turístico</span>
          <span> PRL Mando Intermedio</span>
        </section>
      </article>
    </>
  );
};

export default PanelFour;
