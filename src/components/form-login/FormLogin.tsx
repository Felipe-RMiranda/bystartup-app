import React, { useState } from "react";
import "./formLogin.css";
import CallPopup from "../call-popup/CallPopup";

type FormLoginProps = {
  onSwitch: () => void;
  onLogin?: (data: { email: string; phone: string }) => void;
};

const PHONE_MASK = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 || digits.length === 11;
};

export default function FormLogin({ onSwitch, onLogin }: FormLoginProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ email: false, phone: false });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<string | null>(null);

  const emailError =
    touched.email && !isValidEmail(email) ? "Informe um e-mail válido." : "";
  const phoneError =
    touched.phone && !isValidPhone(phone)
      ? "Informe um telefone válido (10 ou 11 dígitos)."
      : "";
  const formValid = isValidEmail(email) && isValidPhone(phone);

  const handlePhoneChange = (value: string) => {
    setPhone(PHONE_MASK(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, phone: true });
    if (!formValid) return;
    setLoading(true);
    setPopup("Código de acesso: 01234567");
    try {
      await new Promise((r) => setTimeout(r, 700));
      const payload = { email, phone };
      onLogin?.(payload);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        id="form-login"
        onSubmit={handleSubmit}
        aria-label="Formulário de login"
      >
        <div className="login-title">
          <h3>Bem-vindo à sua área exclusiva!</h3>
          <p>Faça login de forma rápida e segura.</p>
        </div>
        <div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={emailError ? "input-error" : "input-normal"}
            placeholder="Email ID"
            required
            aria-invalid={Boolean(emailError)}
            aria-describedby="email-error"
          />
          {emailError && (
            <p id="email-error" className="error-message">
              {emailError}
            </p>
          )}
        </div>
        <div>
          <input
            id="phone"
            inputMode="tel"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            className={phoneError ? "input-error" : "input-normal"}
            placeholder="Número de celular"
            aria-invalid={Boolean(phoneError)}
            aria-describedby="phone-error"
            required
          />
          {phoneError && (
            <p id="phone-error" className="error-message">
              {phoneError}
            </p>
          )}
        </div>
        <button id="submit" type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Receber código"}
        </button>
        <a
          href="#"
          id="signup-link"
          onClick={(e) => {
            e.preventDefault();
            onSwitch();
          }}
        >
          Cadastre-se
        </a>
      </form>
      {popup && <CallPopup message={popup} onClose={() => setPopup(null)} />}
    </>
  );
}
