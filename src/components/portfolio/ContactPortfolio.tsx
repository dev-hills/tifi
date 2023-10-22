import React, { useEffect, useState } from "react";
import BusinessPortfolio from "../portfolio/BusinessPortfolio";
import Tabs from "../Tabs";
import Individual from "../Individual";

interface ContactProps {
    title: string;
    description: string;
  }
  

const ContactPortfolio: React.FC<PortfolioProps> = ({ title, description }) => {

  const [activeTab, setActiveTab] = useState("Business"); 

  const handleTabChange = (tab: string) => {
    setActiveTab(tab); 
  };

  return (
    <main>
      <h2 className="lg:text-[72px] text-[32px] mb-6 text-center w-full px-4 lg:w-[60%] mx-auto font-semibold font-red-hat">Let us know how we can help you.</h2>
      <div className="text-[16px] w-[100%] lg:w-[50%] font-noto-sans text-center mx-auto">
    In just 48 hours, our experts will meticulously assess your video content and reveal untapped opportunities for enhancing your brand and visual storytelling.
      </div>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "Business" ? <BusinessPortfolio /> : <Individual/>}
    </main>
  );
};

export default ContactPortfolio;



