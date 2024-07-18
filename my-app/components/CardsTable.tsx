import React from 'react';

// Sample data for the cards
const cardData = [
  { title: 'Infosys', description: 'This is card 1 description.', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
  { title: 'Barclays', description: 'This is card 2 description.', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
  { title: 'J.P. Morgan', description: 'This is card 3 description.', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
  { title: 'University of Bath', description: 'This is card 4 description.', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
  // Add more card objects as needed
];

const CardsTable = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-4 justify-center">
      {cardData.map((card, index) => (
        <div key={index} className="card flex flex-row w-full bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
          <figure className="w-1/3 p-4">
            <img src={card.imageUrl} alt="Card image" className="rounded-xl" />
          </figure>
          <div className="card-body flex flex-col justify-center text-left w-2/3 p-4">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsTable;