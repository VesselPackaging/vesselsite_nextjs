import Link from 'next/link';

const Location = () => {
  return (
    <div className="flex items-center h-screen flex-col text-vp-white font-barlow">
        <p>Please select your Vessel location:</p>
    <div className="flex justify-between mt-4">
      <Link
        href="/order/location/vancouver"
        className="location_option"
      >
        Vancouver
        <p className='vessel_sub_text text-center w-40'>Serving BC & Western USA</p>
      </Link>
      <Link
        href="/order/location/calgary"
        className="location_option"
      >
        Calgary
        <p className='vessel_sub_text text-center w-40'>Serving AB, BC (Kootenays & East), SK, MB & MT</p>
      </Link>
      <Link
        href="/order/location/mississauga"
        className="location_option"
      >
        Mississauga
        <p className='vessel_sub_text text-center w-40'>Serving ON, QC, Maritime Canada, & Eastern USA</p>
      </Link>
    </div>
    </div>
  );
};

export default Location;
