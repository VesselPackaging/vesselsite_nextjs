'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WarehouseForm from '@components/WarehouseForm'

const CreateOrder = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [order, setOrder] = useState({
        location: '',
        canSize: '',
        numberOfCans: 0,
        address: '',
    });

    const createOrder = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('/api/ordersubmit/new', {
                method: 'POST',
                body: JSON.stringify({
                    location: order.location,
                    canSize: order.canSize,
                    numberOfCans: order.numberOfCans,
                    address: order.address,
                    userId: session?.user.id,
                })
            });

            if(response.ok){
                router.push('/');
            }

        } catch(error){
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

   return (
        <WarehouseForm 
            type="Create"
            order={order}
            setOrder={setOrder}
            submitting={submitting}
            handleSubmit={createOrder}
        />
  )
}

export default CreateOrder