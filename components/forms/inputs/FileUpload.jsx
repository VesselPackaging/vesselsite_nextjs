'use client';
import { useState, useEffect } from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';

const FileUpload = (customerInfo) => {
  const [file, setFile] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const order = useOrderStore((state) => state.order);
  const { companyName, brand } = order;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    try {
      const data = new FormData();
      data.set('file', file);
      data.append('companyName', companyName);
      data.append('brand', brand);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form>
      <input
        type="file"
        name="file"
        onChange={(e) => {
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
            setIsSubmitDisabled(false);
          }
        }}
      />
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isSubmitDisabled ? 'bg-gray-500' : 'bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
      >
        Upload
      </button>{' '}
    </form>
  );
};

export default FileUpload;
