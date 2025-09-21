import type { User } from "../../types/User";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import "./infoTab.css";
import { ContractFactory } from "../../types/IContract";

type InfoTabProps = {
  user: User;
  setActivePage: Dispatch<
    SetStateAction<"info-tab" | "notebook-tab" | "insights-tab">
  >;
};
export default function ({ user, setActivePage }: InfoTabProps) {
  const [nextMeeting] = useState({
    date: "25/09/2025 às 15:00",
    department: "Comercial",
  });
  const contracts = ContractFactory.getMockContracts();

  const [selectedContract, setSelectedContract] = useState<number | null>(null);

  const [contractedServices] = useState([
    "Assessoria recorrente",
    "Projeto de desenvolvimento",
    "Landing page",
  ]);

  return (
    <div className="info-page">
      <header className="header">
        <div className="welcome">
          <img src="/icons/icon-page.png" alt="client logo" className="logo" />
          <h1>
            {user.name}, Seja bem-vindo à sua área exclusiva na ByStartup!
          </h1>
        </div>
        <div className="info-header">
          <section
            className="info-meeting"
            onClick={() => {
              setActivePage("notebook-tab");
            }}
          >
            <div className="title-meeting">
              <img
                id="calendar-icon"
                src="./icons/calendar.png"
                alt="calendar icon"
              />
              <h3>Próxima Reunião</h3>
            </div>
            <p>
              <strong>Data:</strong> {nextMeeting.date}
            </p>
            <p>
              <strong>Departamento:</strong> {nextMeeting.department}
            </p>
          </section>
        </div>
      </header>
      <div className="grid">
        <section className="info-section">
          <h3>📝 Abrir Solicitação</h3>
          <button
            onClick={() => alert("Abrir solicitação de suporte...")}
            className="btn"
          >
            Nova Solicitação
          </button>
        </section>

        <section className="info-section">
          <h3>📑 Contratos</h3>
          <select
            value={selectedContract ?? ""}
            onChange={(e) => setSelectedContract(Number(e.target.value))}
          >
            <option value="">Selecione um contrato</option>
            {contracts.map((contract) => (
              <option key={contract.id} value={contract.id}>
                {contract.name}
              </option>
            ))}
          </select>

          {selectedContract && (
            <div className="contrato-info">
              <p>
                Exibindo informações do contrato{" "}
                <strong>
                  {contracts.find((c) => c.id === selectedContract)?.name}
                </strong>
              </p>
              <button
                className="btn"
                onClick={() => alert("Abrindo contrato...")}
              >
                Ver Detalhes
              </button>
            </div>
          )}
        </section>

        <section className="info-section">
          <h3>💼 Serviços Contratados</h3>
          <ul>
            {contractedServices.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
