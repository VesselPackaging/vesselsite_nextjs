'use client';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './localeSwitcher/Navigation';

const Nav = () => {
  return (
    <nav className="flex justify-between w-full mb-2 pt-3 relative">
      <Link href="/" className="flex gap-2">
        <Image
          src="/assets/tricor_canada.png"
          alt="vessel logo"
          width={300}
          height={300}
          className="object-contain"
        />
      </Link>
      <Navigation />
    </nav>
  );
};

export default Nav;
