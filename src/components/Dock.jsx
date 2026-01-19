import React from "react";
import "./dock.scss";

const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon">
        <img src="public/dock-icons/github.svg" alt="" srcset="" />
      </div>
      <div className="icon">
        <img src="public/dock-icons/notes.svg" alt="" srcset="" />
      </div>
      <div className="icon">
        <img src="public/dock-icons/spotify.svg" alt="" srcset="" />
      </div>
      <div className="icon">
        <img src="public/dock-icons/calendar.svg" alt="" srcset="" />
      </div>
      <div className="icon">
        <img src="public/dock-icons/mail.svg" alt="" srcset="" />
      </div>
      <div className="icon">
        <img src="public/dock-icons/pdf.svg" alt="" srcset="" />
      </div>
      <div className="icon">
        <img src="public/dock-icons/cli.svg" alt="" srcset="" />
      </div>
    </footer>
  );
};

export default Dock;
