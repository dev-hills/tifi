import React, { useEffect, useState } from "react";
import Business from "./Business";
import Tabs from "./Tabs";
import Individual from "./Individual";

interface ContactProps {
    title: string;
    description: string;
  }
  

    const Contact: React.FC<ContactProps> = ({ title, description }) => {

  const [activeTab, setActiveTab] = useState("Business"); // Default to Business tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab); 
  };

  return (
    <main>
      <h1 className="text-101828 text-4xl font-bold text-center font-Noto-Sans mt-28 mb-6">
       GET IN  TOUCH
       {/* {title} */}
      </h1>
      <div className="mx-auto w-5/12 text-344054 text-sm text-center mb-12">
    In just 48 hours, our experts will meticulously assess your video content and reveal untapped opportunities for enhancing your brand and visual storytelling.
    {/* {description} */}
      </div>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "Business" ? <Business /> : <Individual/>}
    </main>
  );
};

export default Contact;



