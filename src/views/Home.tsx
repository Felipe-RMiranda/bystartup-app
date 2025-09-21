import { useState } from "react";
import Header from "../components/header/Header";
import type { User } from "../types/User";
import InfoTab from "../components/tab-info/InfoTab";
import NotebookTab from "../components/tab-notebook/NotebookTab";
import InsightsTab from "../components/tab-insights/InsightsTab";

type HomeProps = {
  user: User;
  onLogout: () => void;
};

export default function Home({ user, onLogout }: HomeProps) {
  const [activePage, setActivePage] = useState<
    "info-tab" | "notebook-tab" | "insights-tab"
  >("info-tab");

  const tabComponents: Record<string, React.ReactNode> = {
    "info-tab": <InfoTab user={user} />,
    "notebook-tab": <NotebookTab />,
    "insights-tab": <InsightsTab />,
  };

  const renderTabs = () => {
    return tabComponents[activePage] ?? <InfoTab user={user} />;
  };

  return (
    <div id="contener">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <div id="content">{renderTabs()}</div>
    </div>
  );
}
