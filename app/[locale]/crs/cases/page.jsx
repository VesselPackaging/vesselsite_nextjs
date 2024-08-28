'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PrePay = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('https://ordercans.tricorbraun.ca/en/crs/cases');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="flex justify-center items-center h-screen text-white">
      <p>You are being redirected, please wait...</p>
    </section>
  );
};

export default PrePay;
