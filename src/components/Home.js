import React from "react";
import "./homeStyle.css";
import logo from "../Assets/images.png";

function Home() {
  const cardDemoData = [
    {
      img: logo,
      cardTitle: "Shubham Card",
      cardText:
        "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      img: logo,
      cardTitle: "Shubham Card",
      cardText:
        "There are many variations of passages of Lorem Ipsum available,",
    },
    {
      img: logo,
      cardTitle: "Shubham Card",
      cardText:
        "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      img: logo,
      cardTitle: "Shubham Card",
      cardText:
        "There are many variations of passages of Lorem Ipsum available.",
    },
  ];

  return (
    <section style={{ display: "flex" }}>
      {cardDemoData.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img src={card.img} alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">{card.cardTitle}</h5>
              <p className="card-text">{card.cardText}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Home;
