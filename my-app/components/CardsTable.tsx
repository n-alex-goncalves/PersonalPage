import React from 'react';

type CardListProps = {
  cards: CardData[];
};

type CardData = {
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  imageUrl?: string;
};

const CardsTable = ({ cards }: CardListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 justify-center md:grid-cols-2">
      {cards.map((card, index) => (
        <div key={index} className="card flex flex-row w-full bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
          <div className="flex-col">
            <div className="flex flex-row h-2/3">
              {card.imageUrl && <figure className="p-4">
                <img src={card.imageUrl} alt="Card image" className="rounded-xl" />
              </figure>}
            </div>
            <div className="flex flex-row justify-center">
              {card.subtitle && <h2 className="text-md text-gray-400">{`${card.subtitle}`}</h2>}
            </div>
            <div className="flex flex-row justify-center">
              {card.date && <h2 className="text-md text-gray-400">{`${card.date}`}</h2>}
            </div>
          </div>
          <div className="card-body flex flex-col">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsTable;