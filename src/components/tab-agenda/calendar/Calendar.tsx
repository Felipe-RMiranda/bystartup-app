import { useState } from "react";
import RCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import type { ComponentProps } from "react";

type Value = ComponentProps<typeof RCalendar>["value"];

export default function Calendar() {
  const [date, setDate] = useState<Value>(new Date());

  const formatDate = (d: Date | string | null | undefined) => {
    if (!d) return "";
    if (d instanceof Date) return d.toDateString();
    return d; // se vier string, apenas mostra
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <RCalendar onChange={(value) => setDate(value)} value={date} />
      <p>
        Data selecionada:{" "}
        {Array.isArray(date)
          ? `${formatDate(date[0])} até ${formatDate(date[1])}`
          : formatDate(date)}
      </p>
    </div>
  );
}
