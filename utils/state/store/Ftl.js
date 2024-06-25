import { create } from 'zustand';

export const useFtlStore = create((set) => ({
  ftl: {
    companyName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    location: '',
    orderType: '',
    newOrReorder: '',
    canSize: '',
    brand: '',
    numberOfCans: '',
    layersPerPallet: '',
    endType: '',
    palletsOfEnds: '',
    address: '',
    customerPO: '',
    deliveryMethod: '',
    date: '',
    copackerEmail: '',
    comments: '',
    termsOfService: false,
  },
  setField: (field, value) =>
    set((state) => ({ ftl: { ...state.ftl, [field]: value } })),
}));
