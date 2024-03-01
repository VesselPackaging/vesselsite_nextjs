import { create } from 'zustand';

export const useLeadtimeStore = create((set) => ({
    vancouver: {
        britesSupplies: 0,
        pslApp: 0,
        ss: 0,
        labelsOnly: 0,
        ai1Ss: 0,
        ai1Psl: 0,
    },
    calgary: {
        britesSupplies: 0,
        pslApp: 0,
        ss: 0,
        labelsOnly: 0,
        ai1Ss: 0,
        ai1Psl: 0,
    },
    mississauga: {
        britesSupplies: 0,
        pslApp: 0,
        ss: 0,
        labelsOnly: 0,
        ai1Ss: 0,
        ai1Psl: 0,
    },
    setField: (location, field, value) => set((state) => ({ [location]: { ...state[location], [field]: value } })),
}));