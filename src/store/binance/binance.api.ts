import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const binanceApi = createApi({
  reducerPath: "binance/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.binance.com/api/v3",
  }),
  endpoints: (build) => ({
    getSpotPrice: build.query<any, string>({
      query: (currencyPair) => {
        return `/ticker/price?symbol=${currencyPair}`;
      },
    }),
    // getP2PPrice: build.mutation<any, any>({
    //   queryFn: async () => {
    //     const resp = await fetch(
    //       "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search",
    //       {
    //         method: "POST",
    //         body: JSON.stringify({
    //           proMerchantAds: false,
    //           page: 1,
    //           rows: 10,
    //           payTypes: ["Monobank"],
    //           countries: [],
    //           publisherType: null,
    //           asset: "USDT",
    //           fiat: "UAH",
    //           tradeType: "SELL",
    //         }),
    //       }
    //     );
    //     console.log(resp);
    //     return "";
    //   },
    // }),
  }),
});

export const { useLazyGetSpotPriceQuery } = binanceApi;
