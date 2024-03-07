import React from "react";
import "./careerExperience.css";

interface CareerExperienceProps {
  title: string;
  description: string;
  year: string;
}

const CareerExperience = ({
  title,
  description,
  year,
}: CareerExperienceProps) => {
  return (
    <>
      <article className="careerExperience-component">
        <div>
          <span>{year}</span>
        </div>
        <aside>
          <span></span>
          <span></span>
        </aside>
        <section>
          <h2>{title}</h2>
          <span>{description}</span>
        </section>
      </article>
    </>
  );
};

export default CareerExperience;
