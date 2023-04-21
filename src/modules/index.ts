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
