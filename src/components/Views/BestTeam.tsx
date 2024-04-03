import React from "react";
import SubText from "../cn/SubText";
import TitleComponent from "../cn/TitleComponent";
import { TabsBestTeam } from "../TabsBestTeam";

const BestTeam = () => {
  return (
    <div>
      <div className="mb-10">
        <TitleComponent>
          Solutions from the world`&apos;`s best teams.
        </TitleComponent>
        <SubText>
          Join Zoom, Product School, Square, and 40,000 other teams that run
          their teams on Coda.
        </SubText>
      </div>
      <div>
        <TabsBestTeam />
      </div>
    </div>
  );
};

export default BestTeam;
