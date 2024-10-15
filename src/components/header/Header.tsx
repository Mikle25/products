import React from "react";
import Navigation from "../navigation";
import { Flex, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack
      height="60px"
      alignItems="center"
      justifyContent="center"
      color=""
      bgImage="linear-gradient(to-r, cyan.500, cyan.700, cyan.500)"
    >
      <Navigation />
    </Stack>
  );
};

export default Header;
