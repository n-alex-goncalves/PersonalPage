import React from 'react'
import Image from 'next/image';
import { GitHubIcon, PageIcon } from './Icon';
import HoverUnderline from './HoverUnderline';

type ImageData = {
  url: string;
  width: number;
  height: number;
  responsiveWidth: string;
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
    <div className={`card ml-0 pl-0 rounded-none w-full bg-neutral-900 transition duration-300 ease-in-out`}>
      <div className="card flex flex-col md:flex-row">
        {/* CARD IMAGE AND INFO  */}
        {(image?.url || subtitle || date) && (
          <div className="flex flex-col m-5 mr-0 mb-0 md:min-w-[12rem]">
            {image?.url && (<div className={`flex flex-row`}>
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt="Placeholder Image"
              />
            </div>)}
            {subtitle && (<h2 className="flex flex-row mt-3 mr-3 text-md text-gray-200">
              {subtitle}
            </h2>)}
            {date && (<h2 className="flex flex-row mt-1 text-sm text-gray-400">
              {date}
            </h2>)}
        </div>)}
        {/* CARD BODY */}
        <div className="w-auto">
          <h2 className="ml-5 mb-0 mt-5 text-xl font-bold">{title}</h2>
          <p className="flex flex-col m-5">{description}</p>
        </div>
    </div>
      {/* CARD FOOTER */}
      {(githubLink || pageLink || skills) && (
        <div className="card-footer flex flex-row items-center pb-3">
          {githubLink && <div className="pl-5">
            <GitHubIcon height={24} width={24} link={githubLink} />
          </div>}
          {pageLink && <div className="pl-5">
            <PageIcon height={24} width={24} link={pageLink} />
          </div>}
          {skills && <h3 className="ml-5 mb-1 font-bold text-amber-200 text-sm">
            {skills.map((skill) => skill).join(', ')}
          </h3>}
        </div>
      )}
  </div>
  )
}

export default Card