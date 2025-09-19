import { useState } from "react";
import CallMeButton from "../../components/CallMeButton";
import FormLogin from "../../components/formLogin/FormLogin";
import FormRegister from "../../components/formRegister/FormRegister";
import "./login.css";

export default function Login() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div id="contener">
      <div id="header">
        <div id="logo">
          <img
            src="/icons/logo-horizontal_negativo-2-536x257.png"
            alt="Logo Horizontal"
            className="logo-horizontal-img"
          />
        </div>
        <div id="call-me">
          <CallMeButton />
        </div>
      </div>
      <div id="content-form">
        {showForm ? (
          <FormLogin onSwitch={() => setShowForm(false)} />
        ) : (
          <FormRegister onSwitch={() => setShowForm(true)} />
        )}
      </div>
    </div>
  );
}
