import React from 'react'
import { ArrowIcon } from './Icon'

const Hero = () => {
  return (
<div className="hero bg-neutral-950 min-h-screen flex flex-col">
    <div className="hero-content p-0 m-0 flex flex-row flex-grow text-center items-center justify-center">
        <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Hey, I'm Nuno</h1>
            <p className="text-1xl py-6">
                I'm a Software Engineer who specializes in backend development. <span className="text-amber-200 font-bold">Python, C++, AWS Cloud and more.</span>
            </p>
            <p className="text-1xl py-1">
                I work with clients to develop web applications, back-end APIs and programs using Python and SQLAlchemy. 
                I'm passionate about giving back to the community and giving it my all in everything I do.
            </p>
        </div>
    </div>
    <div className="animate-bounce-slow pb-5 transition-300">
          <ArrowIcon height={32} width={32}></ArrowIcon>
    </div>
</div>
  )
}

export default Hero