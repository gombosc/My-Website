'use client';

import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import { ReactElement, useContext, useEffect, useRef } from 'react'

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
//   const { scrollY } = useContext(ScrollContext);

  return (
    <div>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-6xl mb-2 font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
            	Cosmin
              </h1>
              <h2 className="text-4xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
              <Typewriter
              options={{
              // strings: ['I build things', 'I write stuff', 'I run marathons'],
              strings: ['Coding by day', 'Writing by night', 'Athlete by heart', 'Dreamer by nature'],
              autoStart: true,
              loop: true,
              }}
              />
              </h2>
			  <div className="flex flex-col font-normal text-2xl sm:text-2xl md:text-3xl xl:text-3xl">
				<Link
					href="/blog"
					className="underline-magical py-1 w-max mb-5 mt-3 xl:py-3"
				>
				Read my blog
				</Link>
				<Link
					href="/projects"
					className="underline-magical py-1 w-max mb-5 xl:py-3"
				>
					See projects
				</Link>
				<Link
					href="/about"
					className="underline-magical py-1 w-max xl:py-3"
				>
					About me
				</Link>
			  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
