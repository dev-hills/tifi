import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex flex-col">
      <ul className="flex items-center justify-center mb-4 border-b-2 border-solid border-gray-300">
        <li
          className={`relative p-3 ${activeTab === "Business" ? "text-orange-500" : "text-gray-700"} cursor-pointer`}
          onClick={() => onTabChange("Business")}

        >
          Businessesss
          {activeTab === "Business" && (
            <div className="absolute w-full h-1 bg-orange-500 bottom-0"></div>
          )}
        </li>
        <li
          className={`relative p-3 ${activeTab === "Individual" ? "text-orange-500" : "text-gray-700"} cursor-pointer`}
          onClick={() => onTabChange("Individual")}

        >
          Individual
          {activeTab === "Individual" && (
            <div className="absolute w-full h-1 bg-orange-500 bottom-0"></div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Tabs;


