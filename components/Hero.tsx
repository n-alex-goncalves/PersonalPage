import React from 'react'
import { ArrowIcon } from './Icon'


const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen min-w-full">
    <div className="hero-content text-center m-4">
        <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hey, I&apos;m Nuno</h1>
        <p className="text-1xl py-6">
          I&apos;m a Software Engineer who specializes in backend development. <span className="text-amber-200 font-bold">Python, C++, TypeScript, React, AWS Cloud, and more.</span>
        </p>
        <p className="text-1xl py-1">
            I collaborate with clients to develop web applications and back-end APIs. 
            I&apos;m passionate about discrete/pure mathematics, statistical problem-solving, and engineering the best solution possible.
        </p>
        </div>
    </div>
    </div>
  )
}

export default Hero