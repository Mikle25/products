import React, { useEffect, useState } from "react";
import { useLazyGetSpotPriceQuery } from "../../store/binance/binance.api";
import { SkeletonStyle } from "../styles/Skeleton";
import { formatDecimals } from "../../utils/helpers";

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
  }, []);

  const handleGetCurrentRate = (arg: any) => {
    fetch(arg.key);
    setActiveCurrency(arg);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        {listOfCurrency.map((currency) => (
          <div key={currency.key}>
            <button
              className={`${
                activeCurrency.key === currency.key ? "text-cyan-400" : null
              }`}
              onClick={() => handleGetCurrentRate(currency)}
            >
              {currency.name}
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>Current rate:</h2>

        {isFetching ? (
          <SkeletonStyle h="30px" w="200px" />
        ) : (
          <div>
            {activeCurrency.name}: {formatDecimals(data?.price)}$
          </div>
        )}
      </div>
    </div>
  );
};
