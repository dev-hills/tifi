import React, { useEffect, useState } from "react";
import Business from "./Business";
import Tabs from "./Tabs";
import Individual from "./Individual";

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Business"); // Default to Business tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab); 
    console.log(`hhhh ${tab}`)
  };

  return (
    <main>
      <div className="text-101828 text-4xl font-bold text-center mt-28">
        Get in Touch
      </div>
      <div className="mx-auto w-5/12 text-344054 text-sm text-center mb-12">
        In just 48 hours, our experts will meticulously assess your video content and reveal untapped opportunities for enhancing your brand and visual storytelling.
      </div>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "Business" ? <Business /> : <Individual/>}
    </main>
  );
};

export default Contact;



