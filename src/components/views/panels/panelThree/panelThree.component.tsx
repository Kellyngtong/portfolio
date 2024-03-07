import React from "react";
import "./panelThree.css";
import CareerExperience from "../../../careerExperience/careerExperience.component.tsx";

interface PanelOneProps {
  setPersonalPanel: (boolean) => void;
}

const PanelThree = ({ setPersonalPanel }: PanelOneProps) => {
  return (
    <>
      <CareerExperience
        year="Now 2018"
        title="Real Club Náutico de Gran Canaria"
        description="Not my primary role, but I handle diverse IT support tasks including
          setting up small streaming rooms for events and professional-grade
          equipment for use, alongside software contributions in C# and Odoo
          Modules with Python."
      />

      <CareerExperience
        year="2018 2016"
        title="Tourist Informer and Museum Guide"
        description="*Extensive use of English*
      Work experience includes roles at the Painted Cave, Columbus House
      Museum, and Perez Galdos House-Museum, among others.
      
      "
      />
    </>
  );
};

export default PanelThree;
