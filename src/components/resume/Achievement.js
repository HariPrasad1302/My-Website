import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Smart India Hackathon"
            subTitle=""
            result="2022 Winner"
            des="The 36 hours coding competition. Selected for the idea ”NLP based Education Translator for vernacular
            Languages in India”"
          />
          <ResumeCard
            title="Proxy 22"
            subTitle=""
            result="RunnerUP"
            des="The 3 day Tech contest which covers the 3 various domains such as Cryptography, PyGame, Cybersecurity.
            "
          />
          <ResumeCard
            title="VIT Hackathon"
            subTitle="Google Student Developer Hackathon"
            result="FInalist"
            des="The 48 hours coding competition on the idea of ”Photo Blocks” DAPP - Blockchoin technology for
            photographers built on a Algorand Network to authenticate ownership for their works and showcasing
            their photographies to consumers for hiring and they can mint their photographies to NFTs."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">--</p>
          <h2 className="text-4xl font-bold">--</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TNSI 2021"
            subTitle=""
            result="2021"
            des="A Business pitch for the selected idea ”Self Taught”. There are three rounds: selection of idea, 3 days
            boot comps and a final business pitch."
          />
          
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
