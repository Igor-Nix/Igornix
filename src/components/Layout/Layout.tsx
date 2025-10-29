import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  );
};

export default Layout;
