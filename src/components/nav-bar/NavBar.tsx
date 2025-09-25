import type { Dispatch, SetStateAction } from "react";
import "./nav-bar.css";

type NavBarProps = {
  activePage?: "info-tab" | "agenda-tab" | "insights-tab";
  setActivePage?: Dispatch<
    SetStateAction<"info-tab" | "agenda-tab" | "insights-tab">
  >;
};

export default function NavBar({ activePage, setActivePage }: NavBarProps) {
  return (
    <nav id="nav">
      <button
        className={activePage === "info-tab" ? "active" : ""}
        onClick={() => setActivePage?.("info-tab")}
      >
        Home
      </button>
      <button
        className={activePage === "agenda-tab" ? "active" : ""}
        onClick={() => setActivePage?.("agenda-tab")}
      >
        Agenda
      </button>
      <button
        className={activePage === "insights-tab" ? "active" : ""}
        onClick={() => setActivePage?.("insights-tab")}
      >
        Insights
      </button>
    </nav>
  );
}
