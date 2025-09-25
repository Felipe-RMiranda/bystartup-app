export interface IInfoSummaryData {
  date: string;
  title: string;
  category: "Comercial" | "Tecnologia" | "Marketing";
  info: string;
}

export class InfoSummaryFactory {
  static getList(): IInfoSummaryData[] {
    return [
      {
        date: "22/09",
        title: "Reunião Comercial",
        category: "Comercial",
        info: "Discutir metas de vendas e estratégia de abordagem de clientes. Avaliar resultados do trimestre anterior, analisar oportunidades de mercado, definir prioridades para a equipe de vendas e revisar indicadores de desempenho para otimizar os próximos passos.",
      },
      {
        date: "23/09",
        title: "Workshop de Tecnologia",
        category: "Tecnologia",
        info: "Apresentação sobre novas tecnologias para otimização de processos. Incluir demonstrações práticas de ferramentas emergentes, estudos de caso internos e externos, além de propor estratégias de integração com os sistemas existentes na empresa para aumentar produtividade e reduzir erros.",
      },
      {
        date: "24/09",
        title: "Campanha de Marketing",
        category: "Marketing",
        info: "Planejar campanha de marketing digital para o próximo trimestre. Definir público-alvo, criar conteúdo relevante, estabelecer cronograma de postagens, integrar redes sociais e campanhas de e-mail marketing, e prever métricas de performance para monitoramento contínuo.",
      },
      {
        date: "25/09",
        title: "Revisão Comercial",
        category: "Comercial",
        info: "Revisão do pipeline de vendas e acompanhamento de clientes. Analisar contratos em andamento, identificar possíveis gargalos, propor ajustes em negociações e definir ações de follow-up detalhadas para cada cliente-chave, garantindo alinhamento com a estratégia comercial.",
      },
      {
        date: "26/09",
        title: "Treinamento de Tecnologia",
        category: "Tecnologia",
        info: "Treinamento da equipe em novas ferramentas de desenvolvimento. Abrange práticas de programação, uso de bibliotecas e frameworks atualizados, integração de APIs, técnicas de versionamento e boas práticas de documentação, visando aumentar eficiência e qualidade dos produtos.",
      },
      {
        date: "27/09",
        title: "Brainstorm Marketing",
        category: "Marketing",
        info: "Sessão de brainstorming para novas ideias de campanha. Envolver toda a equipe de marketing, discutir tendências do mercado, explorar diferentes formatos de comunicação, criar protótipos conceituais e avaliar a viabilidade de cada ideia em termos de orçamento e impacto esperado.",
      },
      {
        date: "28/09",
        title: "Reunião Comercial Estratégica",
        category: "Comercial",
        info: "Planejamento estratégico para negociações de alto valor. Analisar histórico de clientes importantes, mapear oportunidades de crescimento, definir táticas de negociação personalizadas, calcular projeções de receita e preparar materiais de apoio para apresentar aos stakeholders.",
      },
      {
        date: "29/09",
        title: "Atualização de Tecnologia",
        category: "Tecnologia",
        info: "Atualização da equipe sobre tendências tecnológicas do mercado. Abordar novas metodologias de desenvolvimento, frameworks emergentes, práticas de segurança da informação, cases de inovação, além de discutir formas de aplicar essas tendências nos projetos internos da empresa.",
      },
    ];
  }
}
