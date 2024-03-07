import React from "react";
import "./panelPersonal.css";

interface PanelPersonalProps {
  actualPanel: number;
}

const PanelPersonal = ({ actualPanel }: PanelPersonalProps) => {
  const imageSrcs = [
    "/HTML5.png",
    "/CSS3.png",
    "/javascript.png",
    "/python.png",
    "/java.png",
    "/springboot.png",
    "/csharp.png",
    "/git.png",
  ];

  return (
    <>
      {actualPanel !== 0 && <span>Aitor Peña - Web-dev</span>}
      <img className="perfil" src="/Me.png" alt="Aitor Peña Sánchez" />

      <div>
        <a
          target="_blank"
          rel="noneferrer noreferrer"
          href="https://github.com/Kellyngtong"
        >
          <img src="/github.png" alt="Github" />
        </a>
        <a
          target="_blank"
          rel="noneferrer noreferrer"
          href="https://www.linkedin.com/in/aitor-aridane-pe%C3%B1a-s%C3%A1nchez-47415595?"
        >
          <img src="/icone-linkedin-ronde-noire.png" alt="Linkedin" />
        </a>
        <a
          target="_blank"
          rel="noneferrer noreferrer"
          href="https://www.instagram.com/aitor.p.s?"
        >
          <img className="insta" src="instagram.png" alt="" />
        </a>
      </div>
      <section>
        {imageSrcs.map((src, index) => (
          <img key={index} src={src} alt=""></img>
        ))}
      </section>
    </>
  );
};

export default PanelPersonal;
