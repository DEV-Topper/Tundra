"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FirstScreen from "./__components/FirstScreen";
import SecondScreen from "././__components/SecondScreen";

const page = () => {
  const [stage, setStage] = useState<number>(0);

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <section className="md:w-[400px] w-[90%] h-full flex flex-col justify-center">
        <center className="text-center w-full h-[90%] max-h-[90%] flex flex-col items-center justify-between">
          <div className="w-full flex items-center flex-col text-[20px] space-y-3">
            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full border-4 border-gray-300 bg-[#ffffff]">
              <Image
                alt="Tundra Logo"
                height={100}
                width={100}
                className="w-[35px] h-[35px]"
                src={
                  "https://res.cloudinary.com/dvtisceko/image/upload/v1719756407/tundra-a_q93xom.png"
                }
              />
            </div>

            <b>Personal Details</b>
            <small>We just need you to fill in some details.</small>
          </div>

          <div className="my-5">
            {stage === 0 ? (
              <FirstScreen setStage={setStage} />
            ) : stage === 2 ? (
              <SecondScreen />
            ) : null}
          </div>

          <div className="space-y-4 w-[80%] md:w-full text-[18px]">
            <small>
              For further, you may visit the Help Center or contact our customer
              service team.
            </small>

            <center>
              <Image
                alt="Tundra Logo"
                height={100}
                width={100}
                src={
                  "https://res.cloudinary.com/dvtisceko/image/upload/v1719749190/tundra_ivo8dz.png"
                }
              />
            </center>
          </div>
        </center>
      </section>
    </main>
  );
};

export default page;
