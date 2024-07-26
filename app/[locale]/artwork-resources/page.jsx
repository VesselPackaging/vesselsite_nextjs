import React from 'react';
import BoxComponent from '../../../components/parts/BoxComponent';

const ArtworkResources = () => {
  return (
    <section className="artwork_wrapper">
      <h1 className="artwork_header">ARTWORK RESOURCES</h1>
      <div>
        <div className="">
          <div className="flex flex-col gap-6 ml-6">
            <div className="flex flex-row items-center">
              <img
                src="/assets/PSL_icon.svg"
                height={62}
                width={62}
                alt="pslLogo"
                className="bg-tb-turq rounded-md p-1"
              />
              <h2 className="ml-3 text-3xl font-barlowbold leading-11 text-tb-violet">
                PRESSURE SENSITIVE LABELS (PSL)
              </h2>
            </div>
            <p>
              Standard size templates that match our standard pricing. For
              custom sizes and Recyc-Québec paper PSLs, please contact
              <a className="text-tb-turq" href="mailto:gfx@vesselpackaging.com">
                {' '}
                gfx@vesselpackaging.com
              </a>
              .
            </p>
          </div>
          <div className="selection_wrapper">
            <div className="p-12 flex flex-row gap-6">
              <BoxComponent
                title="355ml STD"
                rect1Text='Get 7.5" x 3.5"'
                rect1Link="https://example.com/1"
                rect2Text='Get 8" x 3.5"'
                rect2Link="https://example.com/2"
                rectColor="bg-tb-turq"
              />
              <BoxComponent
                title="473ml STD"
                rect1Text='Get 7.5" x 5"'
                rect1Link="https://example.com/1"
                rect2Text='Get 8" x 5"'
                rect2Link="https://example.com/2"
                rectColor="bg-tb-turq"
              />
              <BoxComponent
                title="355ml SLK"
                rect1Text='Get 7.5" x 3.5"'
                rect1Link="https://example.com/1"
                rectColor="bg-tb-turq"
              />
              <BoxComponent
                title="250ml SLM"
                rect1Text='Get 6.5" x 4.4375"'
                rect1Link="https://example.com/1"
                rectColor="bg-tb-turq"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-6 ml-6">
            <div className="flex flex-row items-center">
              <img
                src="/assets/SS_icon.svg"
                height={62}
                width={62}
                alt="pslLogo"
                className="bg-tb-orange rounded-md p-1"
              />
              <h2 className="ml-3 text-3xl font-barlowbold leading-11 text-tb-violet">
                SHRINK SLEEVING (SS))
              </h2>
            </div>
            <p>
              Our shrink sleeve templates can help you lay out your artwork so
              the important stuff doesn't get distorted by the curved can areas
              and seams.
            </p>
          </div>
          <div className="selection_wrapper">
            <div className="p-12 flex flex-row gap-6">
              <BoxComponent
                title="355ml STD"
                rect1Text="Get 355ml STD"
                rect1Link="https://example.com/1"
                rectColor="bg-tb-orange"
              />
              <BoxComponent
                title="473ml STD"
                rect1Text="Get 473ml STD"
                rect1Link="https://example.com/1"
                rectColor="bg-tb-orange"
              />
              <BoxComponent
                title="355ml SLK"
                rect1Text="Get 355ml SLK"
                rect1Link="https://example.com/1"
                rectColor="bg-tb-orange"
              />
              <BoxComponent
                title="250ml SLM"
                rect1Text="Get 250ml SLM"
                rect1Link="https://example.com/1"
                rectColor="bg-tb-orange"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-6 ml-6">
            <div className="flex flex-row items-center">
              <img
                src="/assets/SS_icon.svg"
                height={62}
                width={62}
                alt="pslLogo"
                className="bg-tb-pink rounded-md p-1"
              />
              <h2 className="ml-3 text-3xl font-barlowbold leading-11 text-tb-violet">
                PRESS PRINTED CANS
              </h2>
            </div>
            <p>
              Resources for press printed can art are available directly from
              Crown&trade;.
            </p>
            <div className="flex justify-center">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.crowncork.com/beverage-packaging/design-support/artwork-templates"
                className="bg-tb-pink rounded-md w-9/12 p-1"
              >
                <h3 className="flex items-center justify-center t">
                  Go to Crown&trade; resources
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkResources;
