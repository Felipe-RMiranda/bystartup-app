import { useState } from "react";
import NavBar from "../nav-bar/NavBar";
import type { Dispatch, SetStateAction } from "react";
import "./nav-btn.css";

type HeaderProps = {
  activePage: "info-tab" | "agenda-tab" | "insights-tab";
  setActivePage: Dispatch<
    SetStateAction<"info-tab" | "agenda-tab" | "insights-tab">
  >;
};

export default function NavBtn({ activePage, setActivePage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        id="menu-float-btn"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span id="menu-icon">☰</span>
      </button>
      {menuOpen && (
        <div id="nav-bar">
          <NavBar activePage={activePage} setActivePage={setActivePage} />
        </div>
      )}
    </>
  );
}
