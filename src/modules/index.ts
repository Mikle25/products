import { ReactNode } from "react";

export interface IProduct {
  id: number;
  product: string;
  checked: boolean;
  date: string;
}

export interface ITabsProps {
  key: string;
  component: ReactNode;
}

export interface IP2P {
  adv: Adv
  advertiser: Advertiser
}

export interface Adv {
  advNo: string
  classify: string
  tradeType: string
  asset: string
  fiatUnit: string
  advStatus: any
  priceType: any
  priceFloatingRatio: any
  rateFloatingRatio: any
  currencyRate: any
  price: string
  initAmount: any
  surplusAmount: string
  amountAfterEditing: any
  maxSingleTransAmount: string
  minSingleTransAmount: string
  buyerKycLimit: any
  buyerRegDaysLimit: any
  buyerBtcPositionLimit: any
  remarks: any
  autoReplyMsg: string
  payTimeLimit: number
  tradeMethods: TradeMethod[]
  userTradeCountFilterTime: any
  userBuyTradeCountMin: any
  userBuyTradeCountMax: any
  userSellTradeCountMin: any
  userSellTradeCountMax: any
  userAllTradeCountMin: any
  userAllTradeCountMax: any
  userTradeCompleteRateFilterTime: any
  userTradeCompleteCountMin: any
  userTradeCompleteRateMin: any
  userTradeVolumeFilterTime: any
  userTradeType: any
  userTradeVolumeMin: any
  userTradeVolumeMax: any
  userTradeVolumeAsset: any
  createTime: any
  advUpdateTime: any
  fiatVo: any
  assetVo: any
  advVisibleRet: any
  assetLogo: any
  assetScale: number
  fiatScale: number
  priceScale: number
  fiatSymbol: string
  isTradable: boolean
  dynamicMaxSingleTransAmount: string
  minSingleTransQuantity: string
  maxSingleTransQuantity: string
  dynamicMaxSingleTransQuantity: string
  tradableQuantity: string
  commissionRate: string
  tradeMethodCommissionRates: any[]
  launchCountry: any
  abnormalStatusList: any
  closeReason: any
  storeInformation: any
}

export interface TradeMethod {
  payId: any
  payMethodId: string
  payType: any
  payAccount: any
  payBank: any
  paySubBank: any
  identifier: string
  iconUrlColor: any
  tradeMethodName: string
  tradeMethodShortName?: string
  tradeMethodBgColor: string
}

export interface Advertiser {
  userId: any
  userNo: string
  realName: any
  nickName: string
  margin: any
  marginUnit: any
  orderCount: any
  monthOrderCount: number
  monthFinishRate: number
  positiveRate: number
  advConfirmTime: any
  email: any
  registrationTime: any
  mobile: any
  userType: string
  tagIconUrls: any[]
  userGrade: number
  userIdentity: string
  proMerchant: any
  isBlocked: any
  activeTimeInSecond: number
}

export interface ISpot {
  symbol: string
  price: string
}

