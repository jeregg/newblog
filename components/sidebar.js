'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';


const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },

};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src='/favicon.png'
                  width={48}
                  height={48}
                />
              </Link>
            </div>

            {/* Navigation items on the right (reversed order) */}
            <div className="flex flex-row-reverse space-x-0">
              {Object.entries(navItems)
                .reverse() // Reverse the order of navigation items
                .map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={clsx(
                        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                        {
                          'text-neutral-500': !isActive,
                        }
                      )}
                    >
                      <span className="relative py-1 px-2">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                            layoutId="sidebar"
                            transition={{
                              type: 'spring',
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
