'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import CurrentOrder from '../formSections/CurrentOrder';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useRouter } from 'next/navigation';

const FileUpload = ({ locale }) => {
  const t = useTranslations('Forms');
  const order = useOrderStore((state) => state.order);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setField } = useOrderStore();
  const router = useRouter();
  const { companyName, brand } = order;
  const url = process.env.NEXT_PUBLIC_ZAPIER_NEWLABEL_WEBHOOK_URL;
  const url2 = process.env.NEXT_PUBLIC_ZAPIER_BLANKS_WEBHOOK_URL;
  const filename = useRef(
    `${order.companyName}_${order.brand}_${new Date().toISOString().split('T')[0]}_${Math.floor(Math.random() * 1000) + 1}`,
  );

  useEffect(() => {
    console.log('I ran');
    console.log(filename.current);
    setField('filename', filename.current);
  }, [filename]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    setIsLoading(true);
    try {
      const data = new FormData();
      data.set('file', file);
      data.append('filename', order.filename);

      const fetch1 = fetch('/api/upload', {
        method: 'POST',
        body: data,
      });

      const fetch2 = fetch(url, {
        method: 'POST',
        body: JSON.stringify(order),
      });

      const fetches = [fetch1, fetch2];
      if (order.allinone === true) {
        const fetch3 = fetch(url2, {
          method: 'POST',
          body: JSON.stringify(order),
        });
        fetches.push(fetch3);
      }

      const responses = await Promise.all(fetches);

      setIsLoading(false);

      if (!responses.every((res) => res.ok)) {
        throw new Error('HTTP error!');
      }

      router.push(`/${locale}/diagnosis/success`);
    } catch (e) {
      console.error(e);
      router.push(`/${locale}/diagnosis/unsuccessful`);
    }
  };

  return (
    <section className="flex flex-col items-center w-11/12 max-w-full bg-vp-orchid rounded-lg p-24 small_scrn_less_padding my-24 mx-60">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">{t('FileUploadSubmit')}</span>
      </h1>
      <form className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center mt-24 space-y-6">
          <label
            htmlFor="file"
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-black hover:bg-vp-copper focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"          >
            {t('SelectFile')}
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
            className={`w-full group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isSubmitDisabled ? 'bg-gray-500' : 'bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}          >
            {isLoading ? t('Loading') : t('UploadSubmit')}
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
