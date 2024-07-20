import React from 'react'
import Image from 'next/image';

type Card = {
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  imageUrl?: string;
  link?: string[];
  skills?: string[];
};

const Card = ({ title, subtitle, date, description, imageUrl, link, skills }: Card) => {
  return (
    <div className="card flex flex-col group/edit w-full bg-base-100 hover:-translate-y-1 hover:scale-105 shadow-xl transition duration-300 ease-in-out">
      <div className="card flex flex-row">
        {/* CARD IMAGE AND INFO */}
        {imageUrl && <div className="flex flex-col p-5 pr-0 md:w-1/3">
          {imageUrl && <Image src={imageUrl} width={512} height={128} alt={title} className="object-cover" />}
          {subtitle && <h2 className="text-md group-hover/edit:underline text-gray-200 mt-2">{subtitle}</h2>}
          {date && <h2 className="text-sm group-hover/edit:underline text-gray-400">{date}</h2>}
        </div>}
        {/* CARD BODY */}
        <div className="card-body flex flex-col p-5 md:w-2/3">
          <h2 className="card-title text-xl group-hover/edit:underline font-bold">{title}</h2>
          <p>{description}</p>
        </div>
    </div>
      {/* CARD FOOTER */}
      <div className="card-footer flex flex-row p-5 pt-0">
        {link && <h3 className="pr-5 text-sm">
          {link.map((link) => link).join(' ')}
        </h3>}
        {skills && <h3 className="text-yellow-200 text-sm">
          {skills.map((skill) => skill).join(', ')}
        </h3>}
      </div>
  </div>
  )
}

export default Card