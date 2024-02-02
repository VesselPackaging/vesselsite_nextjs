import { create } from 'zustand';

export const useLeadtimeStore = create((set) => ({
    leadtime: {
        blanks: 2,
        shrink: 3,
    },
    setField: (field, value) => set((state) => ({ leadtime: { ...state.leadtime, [field]: value } })),
}));