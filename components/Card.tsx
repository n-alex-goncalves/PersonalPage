// Card.tsx
import React from 'react';
import Image from 'next/image';
import { GitHubIcon, PageIcon } from './Icon';

// Types
interface ImageData {
  url: string;
  width: number;
  height: number;
  responsiveWidth: string;
}

interface CardProps {
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  image?: ImageData;
  githubLink?: string;
  pageLink?: string;
  skills?: string[];
}

// Card component
const Card = ({
  title,
  subtitle,
  date,
  description,
  image,
  githubLink,
  pageLink,
  skills = []
}: CardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 border-t border-neutral-800 py-6 w-full first:border-t-0 md:min-h-[200px]">
      {image?.url && (
        <div className="w-full md:w-48 flex-shrink-0 md:mr-4">
          <Image
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            className="max-w-[200px] h-auto object-contain"
          />
        </div>
      )}

      <div className="flex flex-col justify-between w-full space-y-2">
        <div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
          {date && <p className="text-sm text-gray-500">{date}</p>}
        </div>

        <p className="text-sm text-gray-300 leading-snug whitespace-pre-line">
          {description}
        </p>

        <div className="flex items-center flex-wrap gap-x-2 text-sm text-gray-400 pt-2">
          {githubLink && <GitHubIcon height={22} width={22} link={githubLink} />}
          {pageLink && <PageIcon height={22} width={22} link={pageLink} />}
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-gray-600 px-2 py-0.5 rounded-sm tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
