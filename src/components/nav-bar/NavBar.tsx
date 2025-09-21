import type { Dispatch, SetStateAction } from "react";
import "./nav-bar.css";

type NavBarProps = {
  activePage?: "info-tab" | "notebook-tab" | "insights-tab";
  setActivePage?: Dispatch<
    SetStateAction<"info-tab" | "notebook-tab" | "insights-tab">
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
        className={activePage === "notebook-tab" ? "active" : ""}
        onClick={() => setActivePage?.("notebook-tab")}
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
