import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiLogoZoom } from "react-icons/bi";
import { SiGooglemeet, SiSkype } from "react-icons/si";

export function TabsBestTeam() {
  return (
    <Tabs defaultValue="account" className="w-full  ">
      <TabsList className="grid w-full grid-cols-3 h-fit">
        <TabsTrigger
          value="zoom"
          className="flex gap-2 items-center justify-center h-fit"
        >
          <BiLogoZoom className="w-7 h-7" />
          <span className="text-xl font-bold">Zoom</span>
        </TabsTrigger>
        <TabsTrigger
          value="meet"
          className="flex gap-2 items-center justify-center h-fit"
        >
          <SiGooglemeet className="w-7 h-7" />
          <span className="text-xl font-bold">Google Meet</span>
        </TabsTrigger>
        <TabsTrigger
          value="skype"
          className="flex gap-2 items-center justify-center h-fit"
        >
          <SiSkype className="w-7 h-7" />
          <span className="text-xl font-bold">Skype</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="zoom">
        <h1>Account</h1>
      </TabsContent>
      <TabsContent value="meet">
        <h1>Password</h1>
      </TabsContent>
      <TabsContent value="skype">
        <h1>Password</h1>
      </TabsContent>
    </Tabs>
  );
}
