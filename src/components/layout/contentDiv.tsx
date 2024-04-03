import React from "react";

const ContentDiv = ({
  children,
  mg = false,
}: {
  children: React.ReactNode;
  mg?: boolean;
}) => {
  return (
    <div
      className="max-w-[1200px] w-full px-8 mx-auto"
      style={{
        marginBottom: mg ? "60px" : "0px",
      }}
    >
      {children}
    </div>
  );
};

export default ContentDiv;
