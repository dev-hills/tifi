// File: Mainform.tsx
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Tabs from "../../components/Tabs";
import Individual from "../../components/Individual";

const Mainform: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Business"); // Default to Business tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab); 
    console.log(`hhhh ${tab}`)
  };
  return (
    <main className="bg-white relative py-5 font-jakarta-sans">
      <div className="absolute block md:hidden lg:block">
        <img src="/images/Vectorbg.png" alt="Background" />
      </div>
      <div className="absolute block md:hidden lg:block bottom-1 end-1">
        <img src="/images/Vectorbg2.png" alt="Background 2" />
      </div>

      <div className="text-center lg:w-3/5 w-full my-5 mx-auto">
        <h1 className="md:text-5xl font-bold md:hidden lg:block block md:leading-[65.26px] leading-[42px] text-[32px]">
          LET'S <span className="text-res-102">CREATE</span> SOMETHING SPECIAL
          TOGETHER.
        </h1>
        <h1 className="font-bold text-res-103 hidden md:block lg:hidden leading-[62.26px]  text-[48px]">
          LET'S US KNOW HOW WE CAN HELP YOU.
        </h1>
        <p className="text-res-109 leading-[25.6px] py-5">
          In just 48 hours, our experts will meticulously assess your video
          content and reveal untapped opportunities for enhancing your{" "}
          <span className="font-bold">brand</span> and visual storytelling.
        </p>
      </div>

      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="mx-auto max-w-screen-xl lg:px-8">
        <div className="mx-auto max-w-lg">
          {activeTab === "Business" ? <ContactForm /> : <Individual />}
        </div>
      </div>
    </main>
  );
};

export default Mainform;
