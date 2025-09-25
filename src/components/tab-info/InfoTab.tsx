import type { User } from "../../types/User";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import "./infoTab.css";
import { ContractFactory } from "../../types/IContract";
import InfoMeeting from "./info-meeting/InfoMeeting";

type InfoTabProps = {
  user: User;
  setActivePage: Dispatch<
    SetStateAction<"info-tab" | "agenda-tab" | "insights-tab">
  >;
};
export default function ({ user, setActivePage }: InfoTabProps) {
  const contracts = ContractFactory.getMockContracts();

  const [selectedContract, setSelectedContract] = useState<number | null>(null);

  const [contractedServices] = useState([
    "Assessoria recorrente",
    "Projeto de desenvolvimento",
    "Landing page",
  ]);

  return (
    <div className="info-page">
      <header className="header-info-page">
        <div className="welcome-info-page">
          <img
            src="/icons/icon-page.png"
            alt="client logo"
            className="logo-info-page"
          />
          <h1>
            {user.name}, Seja bem-vindo à sua área exclusiva na ByStartup!
          </h1>
        </div>

        <div className="info-header-info-page">
          <div
            className="info-meeting"
            onClick={() => {
              setActivePage("agenda-tab");
            }}
          >
            <InfoMeeting />
          </div>
        </div>
      </header>

      <div className="grid-info-page">
        <section className="section-info-page">
          <div className="bg-service-info-page"></div>

          <div className="info-section-info-page">
            <h1>Serviços Contratados</h1>

            <ul>
              {contractedServices.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-info-page">
          <div className="bg-request-info-page"></div>

          <div className="info-section-info-page">
            <h1>Abrir Solicitação</h1>
            <button
              onClick={() => alert("Abrir solicitação de suporte...")}
              className="btn-info-page"
            >
              Nova Solicitação
            </button>
          </div>
        </section>

        <section className="section-info-page">
          <div className="bg-contracts-info-page"></div>

          <div className="info-section-info-page">
            <h1>Contratos</h1>
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
              <div className="contrato-info-info-page">
                <p>Informações do contrato:</p>
                <p>
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
          </div>
        </section>
      </div>
    </div>
  );
}
