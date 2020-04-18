import "./CardCollection.scss";
import React from "react";

import CardComponent from "../CardComponent/CardComponent";

import { CardCollectionContainer } from "./CardCollectionStyles";

const cardData = [
  {
    id: 1,
    img: "https://bit.ly/2RMqNkW",
    alt: "Lorem ipsum",
  },
  { id: 2, img: "https://bit.ly/2XIX6VN", alt: "Lorem ipsum" },
  { id: 3, img: "https://bit.ly/2ylpliO", alt: "Lorem ipsum" },
];

const CardCollection = () => {
  return (
    <CardCollectionContainer>
      {cardData.map(({ img, id, alt }) => {
        return (
          <CardComponent
            key={id}
            img={img}
            alt={alt}
            size={id % 3 === 0 ? "big" : "small"}
          />
        );
      })}
    </CardCollectionContainer>
  );
};

export default CardCollection;
