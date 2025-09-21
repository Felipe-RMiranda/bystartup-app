export interface IContract {
  id: number; // identificador único
  name: string; // nome do contrato
  department: "Comercial" | "Tecnologia" | "Marketing"; // área responsável
  startDate: string; // data de início (ISO string: "2025-09-20")
  endDate?: string; // data de fim (opcional, para contratos encerrados)
  status: "ativo" | "pendente" | "encerrado"; // estado do contrato
  description?: string; // descrição opcional
  services: string[]; // lista de serviços contratados
}
export class ContractFactory {
  static getMockContracts(): IContract[] {
    return [
      {
        id: 1,
        name: "Contrato de Desenvolvimento Web",
        department: "Tecnologia",
        startDate: "2024-01-15",
        status: "ativo",
        services: ["Desenvolvimento de Software", "Manutenção"],
      },
      {
        id: 2,
        name: "Contrato de Marketing Digital",
        department: "Marketing",
        startDate: "2023-07-01",
        endDate: "2024-07-01",
        status: "encerrado",
        services: ["Gestão de Redes Sociais", "SEO"],
      },
      {
        id: 3,
        name: "Contrato Comercial de Consultoria",
        department: "Comercial",
        startDate: "2025-02-10",
        status: "pendente",
        services: ["Consultoria Estratégica"],
      },
      {
        id: 4,
        name: "Contrato de Suporte Técnico",
        department: "Tecnologia",
        startDate: "2025-01-01",
        status: "ativo",
        services: ["Suporte 24/7", "Atendimento Remoto"],
      },
      {
        id: 5,
        name: "Contrato de Criação de Landing Page",
        department: "Marketing",
        startDate: "2024-11-20",
        status: "ativo",
        services: ["Landing Page", "Copywriting"],
      },
    ];
  }
}
