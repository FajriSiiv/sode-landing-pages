import React from "react";
import {
  SiUber,
  SiTed,
  SiBehance,
  SiNewyorktimes,
  SiHuawei,
  SiHp,
} from "react-icons/si";
import IMG_CONTENT from "@/assets/img-content.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full">
      <BrandCust />
      <AboutBenefits />
    </div>
  );
};

const AboutBenefits = () => {
  return (
    <div className="my-32 flex flex-col gap-32">
      <div className=" grid grid-cols-2 gap-[70px] justify-center items-center">
        <div>
          <Image
            src={IMG_CONTENT}
            alt=""
            className="border rounded-md shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-[50px] font-black -tracking-wider leading-[1.1]">
            A word processor on steroids.
          </h2>
          <p className="text-lg text-slate-800 mt-5">
            All the expectations of a modern doc, plus new tricks—like infinite
            pages, callouts, multi-column layout, collapsible content, and
            more—to create a truly collaborative space.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-[70px] justify-center items-center">
        <div>
          <h2 className="text-[50px] font-black -tracking-wider leading-[1.1]">
            A wiki that works for you.
          </h2>
          <p className="text-lg text-slate-800 mt-5">
            Centralize your team's knowledge, from strategy to schedules, in
            neatly nested pages. So critical information will never live and
            leave with one person.
          </p>
        </div>
        <div>
          <Image
            src={IMG_CONTENT}
            alt=""
            className="border rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-[70px] justify-center items-center">
        <div>
          <Image
            src={IMG_CONTENT}
            alt=""
            className="border rounded-md shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-[50px] font-black -tracking-wider leading-[1.1]">
            A home for everyone (and thing).
          </h2>
          <p className="text-lg text-slate-800 mt-5">
            If your information lives everywhere, your team can’t get anywhere.
            Organize meeting notes, product vision, hard decisions, and more in
            one doc: your team hub.
          </p>
        </div>
      </div>
    </div>
  );
};

const BrandCust = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 mt-10">
      <span className="text-center text-xl ">
        A few of the 40,000+ teams that run on Coda
      </span>
      <div className="flex gap-10 items-center">
        <SiUber className="w-16 h-16" />
        <SiTed className="w-16 h-16" />
        <SiBehance className="w-12 h-12" />
        <SiNewyorktimes className="w-12 h-12" />
        <SiHuawei className="w-12 h-12" />
        <SiHp className="w-12 h-12" />
      </div>
    </div>
  );
};

export default About;
