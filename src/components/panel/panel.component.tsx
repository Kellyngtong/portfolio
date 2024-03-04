import React, { ReactNode } from "react";
import "./panel.css";

interface PanelProps {
  children: ReactNode;
  customClass: string;
}

const Panel = ({ children, customClass }: PanelProps) => {
  return (
    <>
      <main className={"panel-component " + customClass}>{children}</main>
    </>
  );
};

export default Panel;
