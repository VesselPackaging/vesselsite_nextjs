'use client';
import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

const faqData = [
  {
    question: 'What file format should my artwork be submitted as?',
    answer: (
      <>
        Files should be submitted on our template as an Adobe Illustrator .PDF
        or .AI file. Also provide any links (if images are not embedded) and
        convert all text to outlines.
      </>
    ),
  },
  {
    question:
      'Can I submit other file types or PDFs created with other apps (Canva, Quark, Corel, InDesign, etc.) for my artwork?',
    answer: (
      <>
        We can only accept PDFs created from Adobe Illustrator or Illustrator
        files (.ai).
      </>
    ),
  },
  {
    question: 'Will Vessel design my label artwork?',
    answer: (
      <>
        At this time, we do not offer design services. Our graphics department
        can help guide you through best practices, technical specifications, and
        options of materials. However, you will need a designer or illustrator
        for the creative aspects of your artwork.
      </>
    ),
  },
  {
    question:
      'Where can I find best practices for file preparation for my label artwork?',
    answer: (
      <>
        You can find our PSL and shrink sleeve templates{' '}
        <a
          href="http://example.com/templates"
          className="text-tb-turq underline"
        >
          here
        </a>
        , and the checklist for best practices for file preparation{' '}
        <a
          href="http://example.com/checklist"
          className="text-tb-turq underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: 'Where can I find templates for my label artwork?',
    answer: (
      <>
        Our shrink sleeve and PSL templates can be found{' '}
        <a
          href="http://example.com/templates"
          className="text-tb-turq underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question:
      'Can my PSL label be a different size than the templates provided?',
    answer: (
      <>
        Yes, it is also possible to request a different sized PSL. However, this
        will incur additional charges.
      </>
    ),
  },
  {
    question: 'How many colours can I have in my artwork?',
    answer: (
      <>
        For flexo, we can print using up to 7 plates. Please take into account
        that a plate will need to be used for each spot/process colour, matte
        varnish, white layer. If printed digitally, there is no limit on
        colours. However, PMS spot colours will be converted to their CMYK
        equivalents. Here are the details:
        <ul className="list-disc list-inside mt-2">
          <li>Spot/process colour</li>
          <li>Matte varnish</li>
          <li>White layer</li>
        </ul>
      </>
    ),
  },
];

export default Faqs;
