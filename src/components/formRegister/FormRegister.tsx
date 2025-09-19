import React, { useState } from "react";
import "./formRegister.css";

type FormRegisterProps = {
  onSwitch: () => void;
  onSubmit?: (data: {
    companyName: string;
    cnpj: string;
    employeeName: string;
    email: string;
    whatsapp: string;
    category: string;
  }) => void;
};

// Máscaras simples
const CNPJ_MASK = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8)
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  if (digits.length <= 12)
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(
      5,
      8
    )}/${digits.slice(8)}`;
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(
    5,
    8
  )}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
};

const PHONE_MASK = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function FormRegister({
  onSwitch,
  onSubmit,
}: FormRegisterProps) {
  const [companyName, setCompanyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [category, setCategory] = useState("P.O.");
  const [touched, setTouched] = useState({
    companyName: false,
    cnpj: false,
    employeeName: false,
    email: false,
    whatsapp: false,
  });
  const [loading, setLoading] = useState(false);

  const handleCnpjChange = (value: string) => setCnpj(CNPJ_MASK(value));
  const handleWhatsappChange = (value: string) =>
    setWhatsapp(PHONE_MASK(value));

  const errors = {
    companyName:
      touched.companyName && companyName.length < 2
        ? "Informe a razão social."
        : "",
    cnpj:
      touched.cnpj && cnpj.replace(/\D/g, "").length !== 14
        ? "CNPJ inválido."
        : "",
    employeeName:
      touched.employeeName && employeeName.length < 2 ? "Informe o nome." : "",
    email: touched.email && !isValidEmail(email) ? "E-mail inválido." : "",
    whatsapp:
      touched.whatsapp && whatsapp.replace(/\D/g, "").length < 10
        ? "WhatsApp inválido."
        : "",
  };

  const formValid = Object.values(errors).every((e) => e === "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      companyName: true,
      cnpj: true,
      employeeName: true,
      email: true,
      whatsapp: true,
    });
    if (!formValid) return;

    setLoading(true);
    try {
      const payload = {
        companyName,
        cnpj,
        employeeName,
        email,
        whatsapp,
        category,
      };
      await new Promise((r) => setTimeout(r, 700));
      if (onSubmit) onSubmit(payload);
      else console.log("Register submitted:", payload);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="form-register"
      onSubmit={handleSubmit}
      aria-label="Formulário de registro"
    >
      <h3>Cadastro de empresa e funcionário</h3>

      <div id="conteiner">
        <div id="business-content">
          <p>Empresa</p>
          <div className="form-group">
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, companyName: true }))}
              placeholder="Razão social"
            />
            {errors.companyName && (
              <p className="error-message">{errors.companyName}</p>
            )}
          </div>

          <div className="form-group">
            <input
              value={cnpj}
              onChange={(e) => handleCnpjChange(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, cnpj: true }))}
              placeholder="CNPJ"
            />
            {errors.cnpj && <p className="error-message">{errors.cnpj}</p>}
          </div>
        </div>

        <div id="employee-content">
          <p>Funcionário</p>
          <div className="form-group">
            <input
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, employeeName: true }))}
              placeholder="Nome completo"
            />
            {errors.employeeName && (
              <p className="error-message">{errors.employeeName}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="Email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              value={whatsapp}
              onChange={(e) => handleWhatsappChange(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, whatsapp: true }))}
              placeholder="WhatsApp"
            />
            {errors.whatsapp && (
              <p className="error-message">{errors.whatsapp}</p>
            )}
          </div>

          <div className="form-group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              placeholder="Categoria"
              <option value="P.O.">P.O.</option>
              <option value="Jurídico">Jurídico</option>
              <option value="Financeiro">Financeiro</option>
              <option value="Marketing">Marketing</option>
              <option value="T.I.">T.I.</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Cadastrar"}
      </button>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onSwitch();
        }}
      >
        Voltar
      </a>
    </form>
  );
}
