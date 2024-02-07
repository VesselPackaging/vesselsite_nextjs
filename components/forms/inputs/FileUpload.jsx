'use client';
import { useState, useEffect } from 'react';
import CurrentOrder from '../formSections/CurrentOrder';
import { useOrderStore } from 'utils/state/store/Order.js';
import { useRouter } from 'next/navigation';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const { companyName, brand } = order;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    setIsLoading(true);
    try {
      const data = new FormData();
      data.set('file', file);
      data.append('companyName', companyName);
      data.append('brand', brand);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      setIsLoading(false);
      if (!res.ok) {
        throw new Error(await res.text());
      }
      router.push('/order/diagnosis/success');
    } catch (e) {
      console.error(e);
      router.push('/order/diagnosis/unsuccessful');
    }
  };
  return (
    <section className="flex flex-col items-center w-11/12 max-w-full bg-vp-orchid rounded-lg p-24 small_scrn_less_padding my-24 mx-60">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">File Upload & Submit</span>
      </h1>
      <form className="w-full flex flex-col items-center">
        <div className="mt-24 space-y-6">
          <label
            htmlFor="file"
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-black hover:bg-vp-copper focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            Select File
          </label>
          <input
            id="file"
            type="file"
            name="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files.length === 0) {
                setFile(null);
                setIsSubmitDisabled(true);
                return;
              }

              const file = e.target.files[0];
              const sizeInMB = file.size / (1024 * 1024);
              const extension = file.name.split('.').pop().toLowerCase();
              const acceptableExtensions = ['ai', 'pdf'];

              if (sizeInMB > 150) {
                alert('File size exceeds 150MB. Please select a smaller file.');
                setFile(null);
                setIsSubmitDisabled(true);
              } else if (!acceptableExtensions.includes(extension)) {
                alert('Invalid file type. Please select a .ai or .pdf file.');
                setFile(null);
                setIsSubmitDisabled(true);
              } else {
                setFile(file);
                setFileName(file.name);
                setIsSubmitDisabled(false);
              }
            }}
          />
          {fileName && <p className="mt-2 text-center">{fileName}</p>}

          <button
            type="submit"
            onClick={onSubmit}
            disabled={isSubmitDisabled || isLoading}
            className={`w-full group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isSubmitDisabled ? 'bg-gray-500' : 'bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
          >
            {isLoading ? 'Loading...' : 'Upload & Submit Order'}
          </button>
        </div>
      </form>
      <div className="mt-12">
        <CurrentOrder />
      </div>
    </section>
  );
};

export default FileUpload;
