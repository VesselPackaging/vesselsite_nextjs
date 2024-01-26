import { create } from 'zustand';

export const useOrderStore = create((set) => ({
    order: {
        companyName: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        location: "",
        orderType: "",
        canSize: "",
        brand: "",
        numberOfCans: 0,
        endType: "",
        numberOfSleeves: "",
        pakTechType: "",
        numberOfBoxes: "",
        trayType: "",
        bundlesofTrays: "",
        address: "",
        PO: "",
        deliveryMethod: "",
        dunnageType: "",
        date: "",
        copackerEmail: "",
        comments: ""
    },
    setField: (field, value) => set((state) => ({ order: { ...state.order, [field]: value } })),
}));