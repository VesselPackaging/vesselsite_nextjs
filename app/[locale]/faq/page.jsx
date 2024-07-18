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
        <ul className="list-disc list-outside ml-6 mt-2">
          <li>
            For flexo, we can print using up to 7 plates. Please take into
            account that a plate will need to be used for each spot/process
            colour, matte varnish, white layer.
          </li>
          <li>
            {' '}
            If printed digitally, there is no limit on colours. However, PMS
            spot colours will be converted to their CMYK equivalents.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'Should I use Pantone colours or CMYK?',
    answer: (
      <>
        <ul className="list-disc list-outside ml-6 mt-2">
          <li>
            You can use both for flexographic printing. Please use the Pantone
            Solid Coated reference when choosing your spot colours.
          </li>
          <li>
            {' '}
            Digital print labels are printed using CMYK process colours. Pantone
            colours colours will be converted to their closest CMYK equivalents.
            Extended colour gamut printing is available for an additional
            charge.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      'I have labels/printed cans from another supplier. Can you colour match them?',
    answer: (
      <>
        Yes! If you have an old printed can or labeled can, we can arrange to
        have a sample sent to our print partners to colour match. Please allow a
        little time for transit, and the matching process. It is unlikely to
        achieve a 100% match, but our printers will match them as closely as
        possible.
      </>
    ),
  },
  {
    question: 'Why does my barcode have to be turned vertically?',
    answer: (
      <>
        Printing the barcode vertically ensures scannability. Horizontal
        distortion from the shrink sleeve process and curvature of the can may
        render a horizontal barcode unscannable.
      </>
    ),
  },
  {
    question: 'How do I get a metallic look on my labels?',
    answer: (
      <>
        To get an opaque colour, white ink is printed behind the colours.To make
        any element appear metallic, the white layer can have cutouts to allow
        the metal of the can/PSL to show through. This will make colours appear
        metallic.
      </>
    ),
  },
  {
    question: 'Can I have the can show through the sleeve?',
    answer: (
      <>
        Yes. Similar to the process for the metallic look, he white layer may
        have cutouts to allow the metal of the can to show through.
      </>
    ),
  },
  {
    question: 'Why is there a coloured outline around my white text?',
    answer: (
      <>
        For legibility, white text is outlined when printed in CMYK (flexo). If
        your white text is on a spot colour background, there is no need for an
        additional outline.
      </>
    ),
  },
  {
    question:
      'I want a matte varnish on my sleeves. Why should it only go to the bottom of the neck?',
    answer: (
      <>
        Although the chemical is approved for packaging, it is not approved by
        the FDA or Health Canada for food consumption. If you do want to have
        the matte varnish go to the top, we would need to have your choice in
        writing and any varnish related issues will not be the responsibility of
        Vessel or our print partners.
      </>
    ),
  },
];

export default Faqs;
