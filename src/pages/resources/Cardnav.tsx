import React, { useEffect, useState } from "react";
import Cardtab from "./Cardtab";
import CardSection from "./Card.tsx";


const Cardnav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Business"); // Default to Business tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab); 
    console.log(`hhhh ${tab}`)
  };

  return (
    <main className="container mx-auto">
      
      <Cardtab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "Business" ? <CardSection /> : ' ' }
    </main>
  );
};

export default Cardnav;



