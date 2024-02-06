import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-2 pt-3 relative'>
      <Link href="/order" className='flex gap-2'>
        <Image 
          src="/assets/vessellogo.svg" 
          alt="vessel logo"
          width={150}
          height={150}
          className='object-contain'
        />
      </Link>
    </nav>
  );
};

export default Nav;