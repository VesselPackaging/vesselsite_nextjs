'use client';
import { useOrderStore } from '../../../utils/state/store/Order';
import {useTranslations} from 'next-intl';


const PO = () => {
  const { setField } = useOrderStore(); 
  const t = useTranslations('Forms');

  const handlePoChange = (e) => {
    const value = e.target.value;
    setField('PO', value); 
  };
  return (
    <div className="flex mb-4">
      <div className="w-full lg:mr-4 md:mr-4">
        <label className="vessel_input_label">
          {t('PO')}
          <input
            type="text"
            onChange={handlePoChange}
            className="vessel_input"
          />
        </label>
      </div>
    </div>
  )
}

export default PO