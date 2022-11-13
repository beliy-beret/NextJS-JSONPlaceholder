import NavMenu from "./NavMenu";
import React, { FC } from "react";

type ComponentProps = {
  children: React.ReactNode;
};

const Layout: FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
