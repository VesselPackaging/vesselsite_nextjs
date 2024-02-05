'use client';
import {useState, useEffect} from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';

const FileUpload = (customerInfo) => {
    const [file, setFile] = useState(null)
    const order = useOrderStore(state => state.order);
    const { companyName, brand } = order;

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!file) {
            return
        }
        try {
            const data = new FormData()
            data.set('file', file)
            data.append('companyName', companyName);
            data.append('brand', brand);

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            })
            if(!res.ok) throw new Error(await res.text())
        } catch(e) {
            console.error(e)
        }
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <input type="submit" value="Upload" />    
        </form>
    </div>
  )
}

export default FileUpload