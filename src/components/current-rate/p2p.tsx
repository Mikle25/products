import React, { useEffect } from "react";
import { useGetP2PPriceMutation } from "../../store/binance/binance.api";
import { Button, Flex, Grid, Skeleton, Text } from "@chakra-ui/react";

export const P2P = () => {
  const [fetch, { data, isSuccess }] = useGetP2PPriceMutation();

  useEffect(() => {
    fetch({});
  }, []);

  const handleReload = () => {
    fetch({});
  };

  return (
    <Flex flexDir="column" gap="10px" alignItems={{ base: "", md: "center" }}>
      {isSuccess ? (
        data?.map((elem) => (
          <Grid
            key={elem.adv.fiatSymbol}
            templateColumns={{ base: "1fr auto", md: "300px auto" }}
            gap="10px"
          >
            <Text>{elem.advertiser.nickName}:</Text>
            <Text fontWeight="600">
              {elem.adv.price} {elem.adv.fiatSymbol}
            </Text>
          </Grid>
        ))
      ) : (
        <Skeleton h="30px" w="200px" />
      )}

      <Button onClick={handleReload} w={{ base: "100%", md: "fit-content" }}>
        Reload
      </Button>
    </Flex>
  );
};
