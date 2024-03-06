import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const BackButton = () => {
  const router = useRouter();
  const t = useTranslations('Index');

  return (
    <>
      {router.pathname !== '/' && (
        <button 
        className="bg-vp-copper hover:bg-vp-green text-white font-bold py-2 px-4 rounded"
        onClick={() => router.back()}>{t('Back')}</button>
      )}
    </>
  );
};

export default BackButton;
