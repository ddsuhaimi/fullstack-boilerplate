import React from "react";

interface Props {
  children: React.ReactNode;
}

const MinimalLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default MinimalLayout;
