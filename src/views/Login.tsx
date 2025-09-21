import { useState } from "react";
import FormLogin from "../components/form-login/FormLogin";
import FormRegister from "../components/form-register/FormRegister";
import Header from "../components/header/Header";

type LoginProps = {
  onLogin?: (data: { email: string; phone: string }) => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [showForm, setShowForm] = useState(true);
  return (
    <div id="contener">
      <Header />
      <div id="content">
        {showForm ? (
          <FormLogin
            onSwitch={() => setShowForm(false)}
            onLogin={(data) => {
              onLogin && onLogin(data);
            }}
          />
        ) : (
          <FormRegister onSwitch={() => setShowForm(true)} />
        )}
      </div>
    </div>
  );
}
