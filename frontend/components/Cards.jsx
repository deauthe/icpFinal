import React, { useState } from "react";
import "./CardComps/Cards.css";
import Cardesign from "./CardComps/Cardesign";
import Navigator from "./CardComps/Navigator";
import data from "../assets/car.json";
import { collectionNames } from "../constants";

const CardsPerPage = 8;
function Cards() {
  //cut cards
  const [cards, setCards] = useState(data.cars);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [active, setActive] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsToShow, setCardsToShow] = useState(
    filteredCards.slice(0, CardsPerPage)
  );
  const handlePageChange = (page) => {
    const startIndex = (page - 1) * CardsPerPage;
    const endIndex = startIndex + CardsPerPage;
    setCardsToShow(filteredCards.slice(startIndex, endIndex));
    setCurrentPage(page);
  };

  let totalPages = Math.ceil(filteredCards.length / CardsPerPage);

  const filterCards = (year) => {
    if (year === "All") {
      setFilteredCards(cards);
      handlePageChange(1);
      setCardsToShow(cards.slice(0, CardsPerPage));
      totalPages = Math.ceil(cards.length / CardsPerPage);
    } else {
      const filtered = cards.filter((card) => card.make_year == year);
      setFilteredCards(filtered);
      handlePageChange(1);
      setCardsToShow(filtered.slice(0, CardsPerPage));
      totalPages = Math.ceil(filtered.length / CardsPerPage);
    }
  };
  // const getAll = () => {
  //   setFilteredCards(cards);
  //   handlePageChange(1);
  //   setCardsToShow(cards.slice(0, CardsPerPage));
  //   totalPages = Math.ceil(cards.length / CardsPerPage);
  // };
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <div className="">
        <h1 className="text-gradient font-Rose font-semibold ss:text-[52px] text-[35px] ss:leading-[55px] leading-[35px] mb-4">
          Top Collections
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center max-w-[80%]">
        {collectionNames.map((name, index) => (
          <button
            key={name.id}
            className={`border mx-2 border-gray-500 text-white hover:bg-blue-100 hover:text-black font-bold mt-4 py-1 px-4 md:px-10 text-[20px] md:text-[24px] rounded-[27px] ${
              active === name.title ? "bg-purple-700" : ""
            }`}
            onClick={() => {
              setActive(name.title);
              filterCards(name.title);
            }}
          >
            {name.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-x-8">
          <Cardesign cardsToShow={cardsToShow} />
        </div>
      </div>
      <Navigator
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default Cards;
