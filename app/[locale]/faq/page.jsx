'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const t = useTranslations('FAQs');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: t('fileFormat'),
      answer: <>{t('fileFormatAnswer')}</>,
    },
    {
      question: t('otherFileTypes'),
      answer: <>{t('otherFileTypesAnswer')}</>,
    },
    {
      question: t('designServices'),
      answer: <>{t('designServicesAnswer')}</>,
    },
    {
      question: t('bestPractices'),
      answer: (
        <>
          {t('bestPracticesAnswer')}{' '}
          <a
            href="http://example.com/templates"
            className="text-tb-turq underline"
          >
            {t('here')}
          </a>
          {t('bestPracticesMiddle')}{' '}
          <a
            href="http://example.com/checklist"
            className="text-tb-turq underline"
          >
            {t('here')}
          </a>
          .
        </>
      ),
    },
    {
      question: t('templates'),
      answer: (
        <>
          {t('templatesAnswer')}{' '}
          <a
            href="http://example.com/templates"
            className="text-tb-turq underline"
          >
            {t('here')}
          </a>
          .
        </>
      ),
    },
    {
      question: t('differentPSLSize'),
      answer: <>{t('differentPSLSizeAnswer')}</>,
    },
    {
      question: t('coloursInArtwork'),
      answer: (
        <>
          <ul className="list-disc list-outside ml-6 mt-2">
            <li className="mb-4">{t('coloursInArtworkAnswer')}</li>
            <li>{t('coloursInArtworkAnswer2')}</li>
          </ul>
        </>
      ),
    },
    {
      question: t('pantoneOrCMYK'),
      answer: (
        <>
          <ul className="list-disc list-outside ml-6 mt-2">
            <li className="mb-4">{t('pantoneOrCMYKAnswer')}</li>
            <li> {t('pantoneOrCMYKAnswer2')}</li>
          </ul>
        </>
      ),
    },
    {
      question: t('colourMatch'),
      answer: <>{t('colourMatchAnswer')}</>,
    },
    {
      question: t('barcodeVertical'),
      answer: <>{t('barcodeVerticalAnswer')}</>,
    },
    {
      question: t('metallicLook'),
      answer: (
        <>
          To get an opaque colour, white ink is printed behind the colours.To
          make any element appear metallic, the white layer can have cutouts to
          allow the metal of the can/PSL to show through. This will make colours
          appear metallic.
        </>
      ),
    },
    {
      question: t('canShowThrough'),
      answer: <>{t('canShowThroughAnswer')}</>,
    },
    {
      question: t('colouredOutline'),
      answer: <>{t('colouredOutlineAnswer')}</>,
    },
    {
      question: t('matteVarnish'),
      answer: <>{t('matteVarnishAnswer')}</>,
    },
  ];

  return (
    <section className="vessel_form_wrapper p-6">
      <h1 className="head_text text-3xl font-bold !text-vp-yellow mb-6">
        LABEL ARTWORK FAQ
      </h1>
      <div className="faq space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="faq-item border border-gray-300 rounded-lg p-4"
          >
            <div
              className="faq-question cursor-pointer text-lg font-semibold text-tb-violet"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer mt-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
