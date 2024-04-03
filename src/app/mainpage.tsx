import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import IMG_CONTENT from "@/assets/img-content.jpg";
import TitleComponent from "@/components/cn/TitleComponent";
import SubText from "@/components/cn/SubText";

const Mainpage = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center h-[1000px] gap-[90px] relative ">
      <div className="flex flex-col gap-3">
        <TitleComponent>
          Docs and hubs designed for collaboration.
        </TitleComponent>
        <SubText>
          Coda is an all-in-one platform that blends the flexibility of docs,
          structure of spreadsheets, power of applications, and intelligence of
          AI.
        </SubText>

        <Button className="p-[20px] h-auto text-xl font-bold rounded-xl max-w-fit">
          Get started for free
        </Button>
      </div>
      <div className="">
        <Image
          src={IMG_CONTENT}
          alt="img content"
          className="absolute top-[150px] max-w-[1100px] max-h-[900px] border border- rounded-md
          "
        />
      </div>
    </div>
  );
};

export default Mainpage;
