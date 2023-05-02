import React, { useEffect } from "react";
import { useGetP2PPriceMutation } from "../../store/binance/binance.api";
import { SkeletonStyle } from "../styles/Skeleton";

export const P2P = () => {
  const [fetch, { data, isSuccess }] = useGetP2PPriceMutation();

  useEffect(() => {
    fetch({});
  }, []);

  const handleReload = () => {
    fetch({});
  };

  return (
    <>
      <button className='mb-5 text-cyan-400 border-cyan-400' onClick={handleReload}>Reload</button>

      {isSuccess ? (
        data?.map((elem, i) => (
          <div key={i}>
            <span>{elem.advertiser.nickName}: </span>
            <span>
              {elem.adv.price}
              {elem.adv.fiatSymbol}
            </span>
          </div>
        ))
      ) : (
        <SkeletonStyle h="30px" w="200px" />
      )}
    </>
  );
};
