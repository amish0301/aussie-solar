 
import LetterBox from "@/components/home-two/LetterBox";
import ProjectDetailsMain from "@/components/projects-details/ProjectDetailsMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React  from "react";

const ProjectDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
  const  id = params.id;
  return (
    <>
      <Wrapper>
        <main>
           <ProjectDetailsMain id={id}/>
           <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default ProjectDetailsDynamicPage;
