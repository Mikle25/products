import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IP2P, ISpot } from "../../modules";

export const binanceApi = createApi({
  reducerPath: "binance/api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://api.binance.com/api/v3",
    baseUrl: import.meta.env.VITE_CUSTOM_API,
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getSpotPrice: build.query<ISpot, string>({
      query: (currencyPair) => {
        // return `/ticker/price?symbol=${currencyPair}`;
        return `/spot?symbol=${currencyPair}`;
      },
    }),
    getP2PPrice: build.mutation<IP2P[], any>({
      query: () => ({
        url: "/p2p",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          proMerchantAds: false,
          page: 1,
          rows: 5,
          payTypes: ["Monobank"],
          countries: [],
          publisherType: null,
          asset: "USDT",
          fiat: "UAH",
          tradeType: "SELL",
        }),
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useLazyGetSpotPriceQuery, useGetP2PPriceMutation } = binanceApi;
