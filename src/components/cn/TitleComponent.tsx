import React from "react";

const TitleComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-[50px] font-black -tracking-wider leading-[1.1]">
      {children}
    </h1>
  );
};

export default TitleComponent;
