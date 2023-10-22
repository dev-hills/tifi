import React, { useState } from "react";

function VideoCardTab() {
  const [activeTab, setActiveTab] = useState("Business");

  const onTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex lg:flex-row md:flex-row flex-col font-noto-sans my-8 lg:w-[80%] md:w-[80%] w-[100%] mx-auto">
      <ul className="flex items-center mb-4 border-solid border-b-2 border-gray-400 text-res-109 md:space-x-6 space-x-0 w-full mr-5 flex-nowrap overflow-hidden justify-center w-[80%] mx-auto">
        <li
          className={`relative p-3 cursor-pointer ${activeTab === "Business" ? "border-b-4 font-bold border-[#FF601F] text-res-102" : "text-gray-700"}`}
          onClick={() => onTabChange("Business")}
        >
          Business
        </li>
        <li
          className={`relative p-3 cursor-pointer ${activeTab === "Individual" ? "border-b-4 font-bold border-[#FF601F] text-[#FF601F] " : "text-gray-700"}`}
          onClick={() => onTabChange("Individual")}
        >
          Individual
        </li>
      </ul>
      <div className="flex items-center my-4 lg:my-0 space-x-4 ml-auto lg:w-[20%] md:w-[20%] w-[90%] mx-auto">
        <select data-te-select-init className="border border-res-105 lg:w-[169px] p-2 outline-none text-res-109 w-full rounded-lg">
          <option value="1">Short film</option>
          <option value="2">Movies</option>
          <option value="3">Series</option>
        </select>
      </div>
    </div>
  );
}

export default VideoCardTab;