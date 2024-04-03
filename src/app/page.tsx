import ContentDiv from "@/components/layout/contentDiv";
import BestTeam from "@/components/Views/BestTeam";
import LearnMore from "@/components/Views/LearnMore";
import StartWTemplateTool from "@/components/Views/StartWTemplateTool";
import About from "./about";
import Mainpage from "./mainpage";

export default function Home() {
  return (
    <main>
      <div className="bg-sky-200 h-[1000px] overflow-hidden">
        <ContentDiv>
          <Mainpage />
        </ContentDiv>
      </div>
      <ContentDiv>
        <About />
      </ContentDiv>
      <div className="bg-sky-200">
        <ContentDiv mg={true}>
          <LearnMore />
        </ContentDiv>
      </div>
      {/* <ContentDiv mg={true}>
        <BestTeam />
      </ContentDiv> */}
      <ContentDiv mg={true}>
        <StartWTemplateTool />
      </ContentDiv>
    </main>
  );
}
