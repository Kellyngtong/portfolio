import React from "react";
import "./navElement.css";

interface NavElementProps {
  elements: { name: string; panelId: number }[];
  setter: (number) => void;
  getter: number;
}

const NavElement = ({ elements, setter, getter }: NavElementProps) => {
  return (
    <>
      {elements.map((obj, index) => (
        <article
          key={index}
          className={
            "navElement-component " +
            (getter === obj.panelId && "menu-highlight")
          }
          onClick={() => {
            setter(obj.panelId);
          }}
        >
          <div>{obj.name}</div>
        </article>
      ))}
    </>
  );
};

export default NavElement;
