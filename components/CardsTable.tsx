import React from 'react';
import Card from './Card';

type CardListProps = {
  title: string;
  cards: Card[];
};

const CardsTable = ({ title, cards }: CardListProps) => {
  return (
    <div className="flex justify-center p-5 md:ml-[10rem]">
      <div className="max-w-[96rem]">
        {/* TITLE */}
        <h1 className="text-lg gap-6 text-gray-400">{title}</h1>
        <div className="grid grid-cols-1 gap-3 p-4 pl-0 lg:grid-cols-2">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              date={card.date}
              description={card.description}
              image={card.image}
              githubLink={card.githubLink}
              pageLink={card.pageLink}
              skills={card.skills}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsTable;
