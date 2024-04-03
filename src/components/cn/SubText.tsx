import React from "react";

const SubText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-lg text-slate-500">{children}</span>;
};

export default SubText;
