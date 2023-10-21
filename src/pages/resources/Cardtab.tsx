import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Cardtab: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex lg:flex-row flex-col justify-between font-noto-sans my-8">
      <ul className="flex items-center mb-4 border-solid border-b border-gray-300 text-res-109 md:space-x-6 space-x-0 w-full mr-5 flex-nowrap overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-thin whitespace-nowrap">
        <li
          className={`relative p-3 cursor-pointer ${activeTab === "Business" ? "border-b-2 font-bold border-res-102 text-res-102" : "text-gray-700"}`}
          onClick={() => onTabChange("Business")}

        >
          Video Editing tips
        </li>
        <li
          className={`relative p-3 cursor-pointer ${activeTab === "Individual" ? "border-b-2 border-res-102" : "text-gray-700"}`}
          onClick={() => onTabChange("Individual")}

        >
          Creative Storytelling
        </li>
        <li
          className={`relative p-3 cursor-pointer ${activeTab === "Industry" ? "border-b-2 border-res-102" : "text-gray-700"}`}
          onClick={() => onTabChange("Industry")}

        >
          Industry insight
        </li>
        <li
          className={`relative p-3 cursor-pointer ${activeTab === "Marketing" ? "border-b-2 border-res-102" : "text-gray-700"}`}
          onClick={() => onTabChange("Marketing")}

        >
          Video Marketing
        </li>
      </ul>
      <div className="flex items-center my-4 lg:my-0 space-x-4">
  <select data-te-select-init className="border border-res-105 lg:w-[169px] p-2 outline-none text-res-109 w-full rounded-lg">
    <option value="1">Newest First</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
    
  </select>
  <select data-te-select-init className="border border-res-105 lg:w-[169px] outline-none text-res-109 p-2 w-full rounded-lg">
    <option value="1">Videos</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
   
  </select>
</div>
      
    </div>
  );
};

export default Cardtab;


