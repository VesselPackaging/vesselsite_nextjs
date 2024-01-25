import Link from 'next/link';
import FormPicker from '@components/forms/FormPicker';
const Mississauga = () => {
    return (
        <>
            <Link href="/order/location"
            className="rounded-full px-4 py-2 bg-gray-500 text-white hover:text-yellow-500 hover:bg-gray-700">
                Back to Order Location
            </Link>

            <FormPicker location="Mississauga" />
        </>
    );
};

export default Mississauga;
