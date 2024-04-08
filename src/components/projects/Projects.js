import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Netflix Clone"
          des="The project is a clone of the Netflix. The tech stacks used in this project are Nextjs, React, Typescript, Prisma, MongoDB, Hooks, etc."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Blockchain-enabled platform for authenticate saree products and multi-franchise."
          src={projectTwo}
        />
        <ProjectsCard
          title="ML Based Project"
          des=" A Gesture-based Tool for Sterile Browsing of Radiology Images"
          src={projectThree}
        />
        <ProjectsCard
          title="PhotoBlocks"
          des=" Blockchoin technology for
          photographers built on a Algorand Network to authenticate ownership for their works."
          src={projectOne}
        />
        <ProjectsCard
          title="NLP Based Project"
          des=" Developed an web application for Natural Language Processing (NLP) technology solutions for mass-effective conceptual learning."
          src={projectFour}
        />
        <ProjectsCard
          title="POSE AI"
          des="An innovative AI project in progress, empowering
          users to transform their photos into different poses using reference images."
          src={projectFive}
        />
      </div>
    </section>
  );
}

export default Projects