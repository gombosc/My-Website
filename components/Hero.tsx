'use client';

import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
//   const { scrollY } = useContext(ScrollContext);

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
                Read my blog
              </Link>
			  <Link
                href="/projects"
                className="underline-magical text-md p-3 w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                My projects
              </Link>
			  <Link
                href="/about"
                className="underline-magical text-md p-3 w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
            	About me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
