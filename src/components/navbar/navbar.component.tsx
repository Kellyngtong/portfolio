import React from "react";
import "./navbar.css";
import NavElement from "../navElements/navElement.component.tsx";

interface NavbarProps {
  elements: { name: string; panelId: number }[];
  setter: (number) => void;
  getter: number;
}

const Navbar = ({ elements, setter, getter }: NavbarProps) => {
  const navElements = [
    { name: "In touch", panelId: 0 },
    { name: "Projects", panelId: 1 },
    { name: "Career", panelId: 2 },
    { name: "Studies", panelId: 3 },
  ];

  return (
    <div className="navbar-component">
      <nav>
        <main>
          <NavElement elements={navElements} setter={setter} getter={getter} />
        </main>
        <div>❤️</div>
      </nav>
    </div>
  );
};

export default Navbar;
