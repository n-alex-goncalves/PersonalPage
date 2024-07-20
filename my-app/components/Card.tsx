import React from 'react'
import Image from 'next/image';
import { GitHubIcon, PageIcon } from './Icon';

type ImageData = {
  url: string;
  width: number;
  height: number;
}
type Card = {
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  image?: ImageData;
  githubLink?: string;
  pageLink?: string;
  skills?: string[];
};

const Card = ({ title, subtitle, date, description, image, githubLink, pageLink, skills }: Card) => {
  return (
    <div className="card flex flex-col group/edit w-full bg-base-100 hover:-translate-y-1 hover:scale-105 shadow-xl transition duration-300 ease-in-out">
      <div className="card flex flex-row text-wrap">
        {/* CARD IMAGE AND INFO */}
        {image?.url && <div className="flex flex-col p-5 pr-0 md:w-1/3">
          <Image src={image.url} width={image.width} height={image.height} alt={title} className="object-cover" />
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
      <div className="card-footer flex flex-row items-center pb-5 border-0 border-sky-400">
        {githubLink && <div className="pl-5">
          <GitHubIcon height={24} width={24} link={githubLink} />
        </div>}
        {pageLink && <div className="pl-2 mb-1">
          <PageIcon height={24} width={28} link={pageLink} />
        </div>}
        {skills && <h3 className="pl-5 text-yellow-200 text-sm mt-0.5">
          {skills.map((skill) => skill).join(', ')}
        </h3>}
      </div>
  </div>
  )
}

export default Card