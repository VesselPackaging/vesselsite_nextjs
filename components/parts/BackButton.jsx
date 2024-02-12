import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/' && (
        <button 
        className="bg-vp-copper hover:bg-vp-green text-white font-bold py-2 px-4 rounded"
        onClick={() => router.back()}>Back</button>
      )}
    </>
  );
};

export default BackButton;
