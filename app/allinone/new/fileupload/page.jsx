'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FileUpload from 'components/forms/inputs/FileUpload';
import { useOrderStore } from 'utils/state/store/Order.js';

const FileUploadSubmit = () => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);

  useEffect(() => {
    if (!order.companyName || !order.contactName || !order.contactEmail || !order.contactPhone || !order.location) {
        router.push('/');
    }
}, [order, router]);
  return (
    <FileUpload />
  )
}

export default FileUploadSubmit
