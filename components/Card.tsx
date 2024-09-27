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
      <div className="card flex flex-col md:flex-row mb-4">
        {/* CARD IMAGE AND INFO  */}
        {(image?.url || subtitle || date) && (
          <div className="flex flex-col m-5 md:mr-0 mb-0 md:min-w-[15rem]">
            {image?.url && (
              <div className="flex flex-row">
                <Image
                  src={image.url}
                  alt="Placeholder Image"
                  layout="responsive" // Ensure it scales responsively
                  width={image.width || 300} // Provide fallback width
                  height={image.height || 200} // Provide fallback height
                  className="max-w-full h-auto object-contain" // Allow image to resize
                />
              </div>
            )}
            {subtitle && (
              <h2 className="flex flex-row mt-3 mr-3 text-2xl text-gray-200">
                {subtitle}
              </h2>
            )}
            {date && (
              <h2 className="flex flex-row mt-3 text-xl text-gray-400">
                {date}
              </h2>
            )}
          </div>
        )}
        {/* CARD BODY */}
        <div className="w-auto">
          <p className="flex flex-col m-5 text-xl">{description}</p>
        </div>
    </div>
    {/* CARD FOOTER */}
    {(githubLink || pageLink || skills) && (
      <div className="card-footer flex flex-row items-end justify-start mb-1 px-5 pb-5 h-full gap-3">
        {githubLink && (
          <div className="flex items-center">
            <GitHubIcon height={24} width={24} link={githubLink} />
          </div>
        )}
        {pageLink && (
          <div className="flex items-center">
            <PageIcon height={24} width={24} link={pageLink} />
          </div>
        )}
        {skills && (
          <h3 className="flex items-center mb-2 font-bold text-amber-200 text-sm leading-normal">
            {skills.join(', ')}
          </h3>
        )}
      </div>
    )}
  </div>
  )
}

export default Card