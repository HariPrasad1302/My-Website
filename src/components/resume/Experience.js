import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Securekloud Technologies Lts - (2023 - Present)"
            result="Chennai, Tamilnadu, India"
            des="Recognized for exceptional leadership and technical process, leading the development of the Wedding Vows
            web app with critical functionalities for event management and user engagement. Currently pioneering the
            creation of an innovative Authentic Saree Website, leveraging blockchain for multi-franchise integration
            and product authentication. Collaborated closely with UI Design teams to craft intuitive interfaces, while
            continuously expanding technical skills across Next.js, React.js, Node.js, and more."
          />
          <ResumeCard
            title="Full Stack Internship"
            subTitle="Securekloud Technologies Lts - (Mar 2023 - Aug 2023)"
            result="Chennai, Tamilnadu, India"
            des="Developed expertise in full-stack development, gaining hands-on experience with frontend, backend, and
            database technologies. Significantly contributed to the VerifiEdge project, a revolutionary blockchainbased application ensuring the immutable verification of personal and professional data. Leveraged Vue.js
            for dynamic frontend interfaces, Python FastAPI for robust backend solutions, and Solidity for seamless
            blockchain integration."
          />
          <ResumeCard
            title="ISPIN - College Club"
            subTitle="Nadar Saraswathi College of Engineering and Technology - (2020 - 2011)"
            result="Theni, Tamilnadu, India"
            des="The college organization for technology enthusiast for sharing knowledge among fellow students and organize technical events.
            Contributed to the College website development, Library Management System, and participated in hackathons."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
