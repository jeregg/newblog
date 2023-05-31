import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="mb-6">
    <div className="group m-auto w-full h-6 flex flex-row justify-between items-center">
    <Link href="/">
      <Image
        src='/favicon.png'
        width={24}
        height={24}
      />
    </Link>
        <ul className="flex flex-row">
            <li className="ml-4 uppercase text-sm font-semibold underline-offset-8 hover:underline transition duration-100"><Link href='./'>Post</Link></li>
            <li className="ml-4 uppercase text-sm font-semibold underline-offset-8 hover:underline transition duration-100"><Link href='./about'>About</Link></li>
        </ul>
    </div>
    </div>

  );
};

export default Header;