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
        numberOfCans: "",
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