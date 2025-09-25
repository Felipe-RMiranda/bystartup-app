import { useState } from "react";
import Header from "../components/header/Header";
import type { User } from "../types/User";
import InfoTab from "../components/tab-info/InfoTab";
import AgendaTab from "../components/tab-agenda/AgendaTab";
import InsightsTab from "../components/tab-insights/InsightsTab";
import { InfoSummaryFactory } from "../types/IInfoSummaryData";
import BottomBar from "../components/bottom-bar/BottomBar";

type HomeProps = {
  user: User;
  onLogout: () => void;
};

export default function Home({ user }: HomeProps) {
  const [activePage, setActivePage] = useState<
    "info-tab" | "agenda-tab" | "insights-tab"
  >("info-tab");

  const tabComponents: Record<string, React.ReactNode> = {
    "info-tab": <InfoTab user={user} setActivePage={setActivePage} />,
    "agenda-tab": <AgendaTab infoData={InfoSummaryFactory.getList()} />,
    "insights-tab": <InsightsTab />,
  };

  const renderTabs = () => {
    return (
      tabComponents[activePage] ?? (
        <InfoTab user={user} setActivePage={setActivePage} />
      )
    );
  };

  return (
    <div className="container">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <div id="content">{renderTabs()}</div>
      <BottomBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
