'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import CurrentOrder from '../formSections/CurrentOrder';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useRouter } from 'next/navigation';
import { Dropbox } from 'dropbox';

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
    `${order.companyName}_${order.brand}_${new Date().toISOString().split('T')[0]}_${Date.now()}`,
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
      // Fetch the access token from the /api/token endpoint
      const tokenResponse = await fetch('/api/token', {
        method: 'POST',
      });
      const { access_token } = await tokenResponse.json();

      // Create a Dropbox instance
      const dbx = new Dropbox({
        accessToken: access_token,
        fetch: fetch.bind(window),
      });

      // Convert the file to a buffer
      const reader = new FileReader();
      reader.onloadend = async () => {
        const buffer = reader.result;

        // Extract the file extension
        const fileExtension = file.name.split('.').pop();

        // Append the file extension to the filename
        const fullFilename = `${filename.current}.${fileExtension}`;

        // Upload the file to Dropbox
        await dbx.filesUpload({ path: `/${fullFilename}`, contents: buffer });

        // Send the order data to the first URL
        const response1 = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(order),
        });

        // If the allinone flag is true, send the order data to the second URL
        if (order.allinone === true) {
          const response2 = await fetch(url2, {
            method: 'POST',
            body: JSON.stringify(order),
          });

          // Check if both requests were successful
          if (!response1.ok || !response2.ok) {
            throw new Error('HTTP error!');
          }
        } else {
          // If the allinone flag is false, only check the first request
          if (!response1.ok) {
            throw new Error('HTTP error!');
          }
        }

        setIsLoading(false);
        router.push(`/${locale}/diagnosis/success`);
      };
      reader.readAsArrayBuffer(file);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
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
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-black hover:bg-vp-copper focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
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
              const acceptableExtensions = ['ai', 'pdf', 'zip', 'eps'];

              if (sizeInMB > 30) {
                alert('File size exceeds 30MB. Please select a smaller file.');
                setFile(null);
                setIsSubmitDisabled(true);
              } else if (!acceptableExtensions.includes(extension)) {
                alert(
                  'Invalid file type. Please select an .ai, .zip, .eps or .pdf file.',
                );
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
