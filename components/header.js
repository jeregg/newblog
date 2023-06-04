import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="sticky top-20">
      <div className="mb-2 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
        <Link href="/">
        <Image
          src='/favicon.png'
          width={48}
          height={48}
        />
        </Link>
      </div>
      <div className="flex flex-row md:flex-col items-start relative mt-0 md:mt-6 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <ul className="flex flex-row md:flex-col space-x-2 md:space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            <li className="my-2 transition-all hover:text-neutral-900 dark:hover:text-neutral-200 flex align-middle text-neutral-500 text-sm"><Link href='./'>Home</Link></li>
            <li className="my-2 transition-all hover:text-neutral-900 dark:hover:text-neutral-200 flex align-middle text-neutral-500 text-sm"><Link href='./'>Post</Link></li>
            <li className="my-2 transition-all hover:text-neutral-900 dark:hover:text-neutral-200 flex align-middle text-neutral-500 text-sm"><Link href='./about'>About</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;