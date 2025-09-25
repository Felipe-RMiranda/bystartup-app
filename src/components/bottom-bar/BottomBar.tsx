import type { Dispatch, SetStateAction } from "react";
import NavBar from "../nav-bar/NavBar";
import "./bottom-bar.css";

type BottomBarProps = {
  activePage?: "info-tab" | "agenda-tab" | "insights-tab";
  setActivePage?: Dispatch<
    SetStateAction<"info-tab" | "agenda-tab" | "insights-tab">
  >;
};

export default function BottomBar({
  activePage,
  setActivePage,
}: BottomBarProps) {
  return (
    <div className="bottom-bar">
      <NavBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
