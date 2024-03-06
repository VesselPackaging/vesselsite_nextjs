import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';

const LabelQty = () => {
    const setField = useOrderStore(state => state.setField);
    const order = useOrderStore(state => state.order);

    const [inputValue, setInputValue] = useState('');
    const [min, setMin] = useState(0);

    useEffect(() => {
        if (order.application === 'Shrink Sleeve') {
            setMin(15000);
        } else if (order.application === 'PSL') {
            setMin(1200);
        }
    }, [order.application]);

    const handleQtyChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setField('numberOfCans', value); 
    };

    return (
        <div className="flex mb-4">
            <div className="w-full">
                <label className="vessel_input_label">
                    Quantity:
                    <input
                        type="number"
                        min={min}
                        value={inputValue}
                        onChange={handleQtyChange}
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        className="vessel_input"
                    />
                </label>
                {inputValue && inputValue < min && (
                    <p className="text-red-500 text-xs mt-1">Minimum for {order.application} is {min}</p>
                )}
            </div>
        </div>
    )
}

export default LabelQty