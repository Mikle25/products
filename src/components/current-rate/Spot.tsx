import React, { useEffect, useState } from "react";
import { useLazyGetSpotPriceQuery } from "../../store/binance/binance.api";
import { formatDecimals } from "../../utils/helpers";
import { Button, Flex, Heading, Skeleton } from "@chakra-ui/react";

const listOfCurrency = [
  {
    key: "USDTUAH",
    name: "USDT/UAH",
  },
  {
    key: "ATOMUSDT",
    name: "ATOM/USDT",
  },
  {
    key: "NEARUSDT",
    name: "NEAR/USDT",
  },
];

export const Spot = () => {
  const [fetch, { data, isFetching }] = useLazyGetSpotPriceQuery();
  const [activeCurrency, setActiveCurrency] = useState(listOfCurrency[0]);

  useEffect(() => {
    fetch(activeCurrency.key);

    const interval = setInterval(() => {
      fetch(activeCurrency.key);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [activeCurrency]);

  const handleGetCurrentRate = (arg: any) => {
    // fetch(arg.key);
    setActiveCurrency(arg);
  };

  return (
    <Flex flexDir="column" gap="10px" alignItems="center">
      <Flex
        alignItems="center"
        gap="10px"
        justifyContent={{ base: "space-between", md: "center" }}
        w="100%"
      >
        {listOfCurrency.map((currency) => (
          <Button
            key={currency.key}
            onClick={() => handleGetCurrentRate(currency)}
            colorScheme={activeCurrency.key === currency.key ? "cyan" : "gray"}
          >
            {currency.name}
          </Button>
        ))}
      </Flex>

      <Heading>Current rate: {formatDecimals(data?.price || 0)}$</Heading>
    </Flex>
  );
};
