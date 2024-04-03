import Image from "next/image";
import React from "react";
import SubText from "../cn/SubText";
import TitleComponent from "../cn/TitleComponent";
import IMG_CONTENT from "@/assets/img-content.jpg";
import { SiFigma } from "react-icons/si";
import { Button } from "../ui/button";
import SubTitle from "../cn/SubTitle";

const StartWTemplateTool = () => {
  const CardTemplate = () => {
    return (
      <div className="p-4 rounded-xl flex flex-col gap-y-3 hover:bg-slate-100 cursor-pointer">
        <div className="shadow-md rounded-md outline-gray-300 outline outline-1 overflow-hidden">
          <Image src={IMG_CONTENT} alt="image content" />
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="font-semibold text-xl">Team Hub</span>
          <p className="opacity-40 leading-tight">
            A one-stop shop for everything related to our team, initiatives, and
            processes.
          </p>
        </div>
      </div>
    );
  };

  const CardTool = () => {
    return (
      <div className="py-8 px-10 rounded-lg flex flex-col gap-y-4 bg-[#f5f5f5] shadow-lg hover:scale-105 hover:bg-white transition-all cursor-pointer">
        <div>
          <SiFigma className="w-12 h-12" />
        </div>
        <span className="font-semibold text-xl">Figma</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 py-16">
        <div className="flex flex-col gap-y-2">
          <TitleComponent>Start fast with templates.</TitleComponent>
          <SubTitle>
            Build docs and wikis with the help of thousands of easy-to-use
            templates in our Gallery.
          </SubTitle>
        </div>
        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1 mt-5">
          <CardTemplate />
          <CardTemplate />
          <CardTemplate />
          <CardTemplate />
        </div>
      </div>
      <div className="flex flex-col gap-y-10 pt-16">
        <div className="flex flex-col gap-y-2">
          <TitleComponent>Integrated like no other tool.</TitleComponent>
          <SubTitle>
            With Packs, you can bring your must-have tools into Coda.
          </SubTitle>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <CardTool />
          <CardTool />
          <CardTool />
          <CardTool />
          <CardTool />
          <CardTool />
          <CardTool />
          <CardTool />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 justify-center items-center pb-16">
        <SubTitle>Choose from hundreds of Packs in our Gallery.</SubTitle>
        <Button className="w-fit text-xl py-4 px-6 h-fit rounded-xl">
          Explore Packs
        </Button>
      </div>
      <div className="flex flex-col gap-y-5 py-16">
        <TitleComponent>Get started for free.</TitleComponent>
        <SubTitle>
          Ready to upgrade your documents and wikis? We've got experts to help
        </SubTitle>
        <div className="flex gap-x-5">
          <Button className="w-fit text-xl py-4 px-6 h-fit rounded-xl">
            Get started for free
          </Button>
          <Button
            className="w-fit text-xl py-4 px-6 h-fit rounded-xl border-2"
            variant="outline"
          >
            Request a demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartWTemplateTool;
