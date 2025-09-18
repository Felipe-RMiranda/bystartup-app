import React, { useState } from "react";
import CallMeButton from "../components/CallMeButton";

type LoginProps = {
  onSubmit?: (data: { email: string; phone: string }) => void;
};

const PHONE_MASK = (value: string) => {
  // Formata para padrão brasileiro (xx) xxxxx-xxxx
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

const isValidEmail = (email: string) => {
  // Regex simples para validação de e-mail (suficiente para formulário)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  // Considera válido se tiver 10 ou 11 dígitos (BR: com/sem nono dígito)
  return digits.length === 10 || digits.length === 11;
};

export default function Login({ onSubmit }: LoginProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ email: false, phone: false });
  const [loading, setLoading] = useState(false);

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
    try {
      // Simulação de envio — substitua pela chamada real de API
      await new Promise((r) => setTimeout(r, 700));
      const payload = { email, phone };
      if (onSubmit) onSubmit(payload);
      else console.log("Login submitted:", payload);
      // aqui você poderia redirecionar / atualizar estado global
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contener"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div
        id="header"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          boxSizing: "border-box",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          zIndex: 10,
        }}
      >
        <div id="logo" style={{ color: "#ef233c", fontWeight: 700 }}>
          <img
            src="/icons/logo-horizontal_negativo-2-536x257.png"
            alt="Logo Horizontal"
            style={{
              height: 40,
              width: "auto",
              display: "block",
              maxWidth: "100%",
            }}
            className="logo-horizontal-img"
          />
          <style>{`
            @media (max-width: 600px) {
              .logo-horizontal-img {
                height: 28px !important;
              }
            }
          `}</style>
        </div>
        <div id="call-me">
          {" "}
          <CallMeButton />
        </div>
      </div>

      <form
        id="content"
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#ffffffff",
          color: "#000000ff",
          border: "2px solid #000000c2",
          borderRadius: 16,
          boxShadow: "-3px 5px 50px #ffb6b66b",
          padding: 32,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
        aria-label="Formulário de login"
      >
        <div
          style={{
            color: "#34372e",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "0px" }}>Bem-vindo à sua área exclusiva!</h3>
          <p style={{ margin: "5px 0px" }}>
            Faça login de forma rápida e segura.
          </p>
        </div>

        <div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            style={{
              textAlign: "center",
              width: "100%",
              border: "none",
              borderBottom: "2px solid #ccc",
              boxShadow: emailError
                ? "0 2px 8px -2px rgba(239,35,60,0.6)"
                : "0 2px 6px -2px rgba(52,55,46,0.2)",
              outline: "none"
            }}
            placeholder="Email ID"
            required
            aria-invalid={Boolean(emailError)}
            aria-describedby="email-error"
          />
          {emailError && (
            <p
              id="email-error"
              style={{ color: "#ef233c", fontSize: "0.85em", marginTop: 4 }}
            >
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
            style={{
              textAlign: "center",
              width: "100%",
              border: "none",
              borderBottom: "2px solid #ccc",
              boxShadow: phoneError
                ? "0 2px 8px -2px rgba(239,35,60,0.6)"
                : "0 2px 6px -2px rgba(52,55,46,0.2)",
              outline: "none"
            }}
            placeholder="Número de celular"
            aria-invalid={Boolean(phoneError)}
            aria-describedby="phone-error"
            required
          />
          {phoneError && (
            <p
              id="phone-error"
              style={{ color: "#ef233c", fontSize: "0.85em", marginTop: 4 }}
            >
              {phoneError}
            </p>
          )}
        </div>

        <button id="submit" type="submit" disabled={!formValid || loading}>
          {loading ? "Enviando..." : "Receber código"}
        </button>

        <a href="#">Cadastre-se</a>
      </form>
    </div>
  );
}
