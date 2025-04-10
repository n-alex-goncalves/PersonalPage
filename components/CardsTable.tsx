import React from 'react';
import Card, { CardProps } from './Card';

type CardListProps = {
  title: string;
  cards: CardProps[];
};

const CardsTable = ({ title, cards }: CardListProps) => {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-xl font-semibold mb-6">{title}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          />
        ))}
      </div>
    </div>
  );
};

export default CardsTable;