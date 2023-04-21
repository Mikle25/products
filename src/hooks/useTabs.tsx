import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITabsProps } from "../modules";

export const UseTabs = (tabs: ITabsProps[]) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const nav = useNavigate();

  useEffect(() => {
    nav(`#${activeTab.key}`)
  }, [])

  const handleActiveTab = (tab: any) => {
    setActiveTab(tab);
    nav(`#${tab.key}`);
  };

  return {
    activeTab,
    handleActiveTab,
  };
};
