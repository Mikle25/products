import React from "react";
import { NavLink } from "react-router-dom";
import { routers } from "../../router";
import { Flex } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex gap="20px" alignItems="center">
      {routers.map((elem) => (
        <Flex
          as={NavLink}
          key={elem.name}
          to={elem.path}
          fontSize="24px"
          fontWeight="600"
          textTransform="uppercase"
          _activeLink={{ bgGradient: "linear(to-l, #0021f8, #9500ff)", bgClip: 'text' }}
        >
          {elem.name}
        </Flex>
      ))}
    </Flex>
  );
};

export default Navigation;
