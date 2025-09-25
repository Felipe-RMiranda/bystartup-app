import "./agendaTab.css";
import { useState } from "react";
import InfoSummary from "./info-summary/InfoSummary";
import type { IInfoSummaryData } from "../../types/IInfoSummaryData";
import Calendar from "./calendar/Calendar";

type AgendaTabProps = {
  infoData: IInfoSummaryData[];
};

export default function AgendaTab({ infoData }: AgendaTabProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index)); // alterna expansão
  };

  return (
    <div id="agenda">
      <section className="info-summary">
        {infoData.map((it, index) => (
          <InfoSummary
            key={index}
            date={it.date}
            title={it.title}
            category={it.category}
            info={it.info}
            expanded={expandedIndex === index}
            onClick={() => handleClick(index)}
            onClickbtn={() => alert("Downloading...")}
          />
        ))}
      </section>
      <section className="calendar">
        <Calendar />
      </section>
    </div>
  );
}
