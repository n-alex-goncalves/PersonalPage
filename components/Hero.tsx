import React from 'react'
import { ArrowIcon } from './Icon'

// <span className="text-amber-200 font-bold">Python, C++, TypeScript, React, AWS Cloud, and more.</span>

const Hero = () => {
  return (
    <div className="hero min-h-screen min-w-full">
    <div className="hero-content text-center m-4">
        <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hi, I&apos;m Nuno—</h1>
        <p className="text-3xl py-6">
          a Software Engineer, book hobbyist, occassional community volunteer near London, England.
        </p>
        <p className="text-2xl py-3">
          <span className="text-amber-200">Experienced in Python, C++, TypeScript, React, AWS Cloud, and more.</span>
        </p>
        </div>
    </div>
    </div>
  )
}

export default Hero