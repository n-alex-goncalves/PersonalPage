import React from 'react'
import { ArrowIcon } from './Icon'


const Hero = () => {
  return (
    <div className="hero bg-neutral-950 min-h-screen flex flex-col">
        <div className="hero-content p-0 m-0 flex flex-row flex-grow text-center items-center justify-center">
            <div className="max-w-lg">
                <h1 className="text-5xl font-bold">Hey, I&apos;m Nuno</h1>
                <p className="text-1xl py-6">
                    I&apos;m a Software Engineer who specializes in backend development. <span className="text-amber-200 font-bold">Python, C++, AWS Cloud and more.</span>
                </p>
                <p className="text-1xl py-1">
                    I collaborate with clients to develop web applications and back-end APIs. 
                    I&apos;m passionate about discrete pure mathematics, statistical problem-solving, and engineering the best solution possible. 
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