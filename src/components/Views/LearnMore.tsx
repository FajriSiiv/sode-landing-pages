import Image from "next/image";
import React from "react";
import SubText from "../cn/SubText";
import TitleComponent from "../cn/TitleComponent";
import { Button } from "../ui/button";
import IMG_CONTENT from "@/assets/img-content.jpg";

const LearnMore = () => {
  return (
    <div className="grid grid-cols-2 gap-[50px] py-[72px] items-center">
      <div className="flex flex-col gap-3">
        <TitleComponent>And an AI-powered work assistant.</TitleComponent>
        <SubText>
          So much more than style and tone. Coda AI helps your team delegate
          repetitive tasks, rethink content creation, and get insights faster.
        </SubText>
        <Button className="w-[110px]">Learn More</Button>
      </div>
      <div>
        <Image
          src={IMG_CONTENT}
          alt="Learn More IMG"
          className="w-[600px] h-[300px] object-cover rounded-md border"
        />
      </div>
    </div>
  );
};

export default LearnMore;
