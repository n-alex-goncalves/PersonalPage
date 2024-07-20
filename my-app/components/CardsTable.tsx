import React from 'react';
import Card from './Card';

type CardListProps = {
  title: string;
  cards: Card[];
};

const CardsTable = ({ title, cards }: CardListProps) => {
  return (
    <div>
      {/* TITLE */}
      <h1 className="text-lg px-5 gap-6 text-gray-400">{title}</h1>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            date={card.date}
            description={card.description}
            imageUrl={card.imageUrl}
            link={card.link}
            skills={card.skills}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default CardsTable;
