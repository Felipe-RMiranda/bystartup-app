import "./info-summary.css";

interface CardProps {
  date: string;
  title: string;
  info: string;
  category: "Comercial" | "Tecnologia" | "Marketing";
  expanded: boolean;
  onClick: () => void;
  onClickbtn: () => void;
}

export default function InfoSummary({
  date,
  title,
  info,
  category,
  expanded,
  onClick,
  onClickbtn,
}: CardProps) {
  return (
    <div className={`card ${expanded ? "expanded" : ""}`} onClick={onClick}>
      <div className={`date ${expanded ? "expanded" : ""}`}>
        <span>{date}</span>
      </div>

      <div className="content">
        <h2 className="title">{title}</h2>
        <h3>{category}</h3>
        <p className={`info ${expanded ? "expanded" : ""}`}>{info}</p>
        <button
          className="download"
          onClick={(e) => {
            e.stopPropagation();
            onClickbtn();
          }}
        >
          ⬇ Download Resumo
        </button>
      </div>
    </div>
  );
}
