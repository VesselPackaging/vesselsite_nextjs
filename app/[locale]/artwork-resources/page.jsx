import React from 'react';
import BoxComponent from '../../../components/parts/BoxComponent';

const ArtworkResources = () => {
  return (
    <section className="artwork_wrapper">
      <h1 className="artwork_header">ARTWORK RESOURCES</h1>
      <div>
        <div className="">
          <div className="flex flex-col gap-6 ml-6">
            <h2>PRESSURE SENSITIVE LABELS (PSL)</h2>
            <p>
              Standard size templates that match our standard pricing. For
              custom sizes and Recyc-Québec paper PSLs, please contact
              gfx@vesselpackaging.com.
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
            <h2>SHRINK SLEEVING (SS)</h2>
            <p>
            Our shrink sleeve templates can help you lay out your artwork 
            so the important stuff doesn't get distorted by the curved can
            areas and seams.
            </p>
          </div>
          <div className="selection_wrapper">
            <div className="p-12 flex flex-row gap-6">
              <BoxComponent
                title="355ml STD"
                rect1Text='Get 355ml STD'
                rect1Link="https://example.com/1"
                rectColor="bg-vp-yellow"
              />
              <BoxComponent
                title="473ml STD"
                rect1Text='Get 473ml STD'
                rect1Link="https://example.com/1"
                rectColor="bg-vp-yellow"
              />
              <BoxComponent
                title="355ml SLK"
                rect1Text='Get 355ml SLK'
                rect1Link="https://example.com/1"
                rectColor="bg-vp-yellow"
              />
              <BoxComponent
                title="250ml SLM"
                rect1Text='Get 250ml SLM'
                rect1Link="https://example.com/1"
                rectColor="bg-vp-yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkResources;
