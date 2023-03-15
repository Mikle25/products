import React, { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-5">{children}</div>;
};

export default Layout;
