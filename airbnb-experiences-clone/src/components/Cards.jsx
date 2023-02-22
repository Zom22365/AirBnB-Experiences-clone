import React from "react";
import data from "../data";
import Card from "../components/Card";
const Cards = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <h2 className="title">Online Experiences</h2>
      <div className="passage">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </div>
      <ul className="cards"> {cards}</ul>
    </div>
  );
};
export default Cards;
