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
                rect1Text='Download 7.5" x 3.5"'
                rect1Link="https://example.com/1"
                rect2Text='Download 8" x 3.5"'
                rect2Link="https://example.com/2"
                rectColor="bg-tb-yellow"
              />
              <BoxComponent
                title="355ml STD"
                rect1Text='Download 7.5" x 3.5"'
                rect1Link="https://example.com/1"
                rect2Text='Download 8" x 3.5"'
                rect2Link="https://example.com/2"
                rectColor="bg-tb-yellow"
              />
              <BoxComponent
                title="355ml STD"
                rect1Text='Download 7.5" x 3.5"'
                rect1Link="https://example.com/1"
                rect2Text='Download 8" x 3.5"'
                rect2Link="https://example.com/2"
                rectColor="bg-tb-yellow"
              />
              <BoxComponent
                title="355ml STD"
                rect1Text='Download 7.5" x 3.5"'
                rect1Link="https://example.com/1"
                rect2Text='Download 8" x 3.5"'
                rect2Link="https://example.com/2"
                rectColor="bg-tb-yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkResources;
