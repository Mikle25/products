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
          fontWeight="600"
          textTransform="uppercase"
          _activeLink={{ color: "teal.300", textDecor: "underline" }}
        >
          {elem.name}
        </Flex>
      ))}
    </Flex>
  );
};

export default Navigation;
