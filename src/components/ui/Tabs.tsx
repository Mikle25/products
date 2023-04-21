import React, { FC } from "react";
import { ITabsProps } from "../../modules";

type TabsProps<T> = {
  tabs: T[];
  activeTab: T;
  setActiveTab: (arg: T) => void;
};

export const Tabs: FC<TabsProps<ITabsProps>> = ({
  tabs,
  setActiveTab,
  activeTab,
}) => {
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.key} className="mr-2" role="presentation">
              <button
                className={`inline-block uppercase p-4 rounded-t-lg ${
                  tab.key === activeTab.key
                    ? "text-cyan-400 border-b-cyan-400 border-b-2"
                    : null
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => setActiveTab(tab)}
              >
                {tab.key}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeTab.component}
    </>
  );
};
