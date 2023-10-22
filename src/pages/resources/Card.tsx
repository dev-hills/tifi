import React, { useState } from "react";
import Pagination from "./Pagination";

const numberOfCards = 40;

const cardData = {
  name: "Video Editing",
  title: "Time lapse and Mapping",
  subtitle:
    "We harness cutting-edge technology to capture the dynamic evolution of landscapes, cityscapes, and more.",
};

const cards = Array(numberOfCards).fill(cardData);

const CardSection: React.FC = () => {
  const itemsPerPage = 6; // Set the number of cards per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = cards.length;

  const onPageChange = (page:any) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);
  return (
    <section className="section font-noto-sans" id="casestudies-section">
      <div className="container mx-auto block">
        <h2 className="font-bold text-4xl text-center py-7 text-res-104">
          Featured
        </h2>
        <div className="grid lg:grid-cols-3  justify-center md:grid-cols-2 container px-auto  grid-cols-1 gap-6 mx-auto my-4">
        {visibleCards.map((post, index) => (
            <div className="h-[420px] w-[376px] mx-auto" key={index}>
              <div>
                <img
                  src="/images/Image.png"
                  className="w-[376px] h-[240px] rounded-lg"
                  alt="Card Image"
                />
              </div>
              <h3 className="text-res-102 font-bold py-2">{post.name}</h3>
              <div className="flex justify-between items-center content-center">
                <p className="text-res-103 text-2xl font-semibold py-2">
                  {post.title}
                </p>
                <img
                  src="/images/arrow.png"
                  className="w-6 h-7"
                  alt="Arrow Icon"
                />
              </div>
              <p className="text-res-106">{post.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <Pagination
      currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={onPageChange}
        />
    </section>
  );
};

export default CardSection;
