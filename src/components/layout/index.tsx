"use client";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Navbar } from "./navbar";

const queryClient = new QueryClient();

const LayoutQuery = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <QueryClientProvider client={queryClient}> */}
      <Navbar />
      {children}
      {/* <ReactQueryDevtools /> */}
      {/* </QueryClientProvider> */}
    </div>
  );
};

export default LayoutQuery;
