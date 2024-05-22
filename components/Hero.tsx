'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
// import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
// import { ScrollContext } from './Providers/ScrollProvider';
// import { renderCanvas } from './renderCanvas';


export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
//   const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

//   useEffect(() => {
//     renderCanvas();
//   }, []);

  return (
    <div>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                Cosmin
              </h1>
              <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
                I build things for the web.
              </h2>
              <Link
                href="/blog"
                className="underline-magical text-md p-3 w-max sm:text-lg md:text-xl xl:text-2xl"
              >
                Read my blog &rarr;
              </Link>
			  <Link
                href="/projects"
                className="underline-magical text-md p-3 w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                My projects &rarr;
              </Link>
			  <Link
                href="/about"
                className="underline-magical text-md p-3 w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
            	About me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
