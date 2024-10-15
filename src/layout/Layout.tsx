import { Flex, Stack } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Header from "../components/header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack spacing="20px" bgGradient="linear-gradient(to-r, red, blue" h="100%">
      <Header />
      <Flex justifyContent="center" padding="0 16px" w="100%">
        {children}
      </Flex>
    </Stack>
  );
};

export default Layout;
