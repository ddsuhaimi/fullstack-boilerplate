import React from "react";

interface Props {
  children: React.ReactNode;
}

const MinimalLayout = ({ children }: Props) => {
  return (
    <div>
      minimal
      {children}
    </div>
  );
};

export default MinimalLayout;
