import React from "react";
import { Tabs } from "../components/ui/Tabs";
import { UseTabs } from "../hooks/useTabs";
import { Spot, P2P } from "../components/current-rate";
import { ITabsProps } from "../modules";

const tabs: ITabsProps[] = [
  {
    key: "spot",
    component: <Spot />,
  },
  {
    key: "p2p",
    component: <P2P />,
  },
];

const CurrentRate = () => {
  const { activeTab, handleActiveTab } = UseTabs(tabs);
  return (
    <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={handleActiveTab} />
  );
};

export default CurrentRate;
