'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../../../utils/state/store/Order';
import BackButton from '../../../../../components/parts/BackButton';
import FileUpload from '../../../../../components/forms/inputs/FileUpload';

const LabelOnlyFileUploadSubmit = ({ params: {locale} })  => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);

  useEffect(() => {
    if (
      !order.companyName ||
      !order.contactName ||
      !order.contactEmail ||
      !order.contactPhone ||
      !order.location
    ) {
      router.push('/');
    }
  }, [order, router]);
  return (
    <>
      <div className="">
        <BackButton />
      </div>

      <FileUpload locale={locale}/>
    </>
  );
};

export default LabelOnlyFileUploadSubmit;
