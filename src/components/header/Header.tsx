import React from "react";
import Navigation from "../navigation";
import { Flex, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack
      height="50px"
      alignItems="center"
      justifyContent="center"
      color=""
      bgImage="linear-gradient(to-r, cyan.600, blue.900, cyan.600)"
    >
      <Navigation />
    </Stack>
  );
};

export default Header;
