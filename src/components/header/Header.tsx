import CallMeButton from "../call-me-buton/CallMeButton";
import type { Dispatch, SetStateAction } from "react";
import "./header.css";
import NavBar from "../nav-bar/NavBar";
import NavBtn from "../nav-btn/NavBtn";

type HeaderProps = {
  activePage?: "info-tab" | "agenda-tab" | "insights-tab";
  setActivePage?: Dispatch<
    SetStateAction<"info-tab" | "agenda-tab" | "insights-tab">
  >;
};
export default function Header({ activePage, setActivePage }: HeaderProps) {
  return (
    <header id="header">
      <div id="logo">
        <img
          id="icon"
          src="/icons/logo-horizontal_negativo-2-536x257.png"
          alt="Logo Horizontal"
        />
      </div>

      {setActivePage && (
        <div id="content-nav-bar">
          <NavBar activePage={activePage} setActivePage={setActivePage} />
        </div>
      )}

      <div id="right-group">
        <div id="call-me">
          <CallMeButton />
        </div>

        {setActivePage && (
          <NavBtn
            activePage={activePage ?? "info-tab"}
            setActivePage={setActivePage}
          />
        )}
      </div>
    </header>
  );
}
