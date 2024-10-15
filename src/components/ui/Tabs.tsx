import React, { FC } from "react";
import { ITabsProps } from "../../modules";
import { Button, Flex, Stack } from "@chakra-ui/react";

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
    <Stack spacing="10px" w="100%">
      <Flex w="100%" gap="10px" justifyContent="space-between">
        {tabs.map((tab) => (
          <Button
            w="100%"
            onClick={() => setActiveTab(tab)}
            colorScheme={tab.key === activeTab.key ? "cyan" : "gray"}
          >
            {tab.key}
          </Button>
        ))}
      </Flex>

      {activeTab.component}
    </Stack>
  );
};
