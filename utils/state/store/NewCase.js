import { create } from 'zustand';

export const useCaseStore = create((set) => ({
  newcase: {
    caseOwner: '',
    resolved: 'No',
    responsiblePerson: '',
    accountName: '',
    contactName: '',
    salesOrder: '',
    invoice: '',
    customerPO: '',
    status: 'New',
    natureOfComplaint: '',
    priority: '',
    businessArea: '',
    product: '',
    cost: '',
    description: '',
    resolution: '',
  },
  setField: (field, value) =>
    set((state) => ({ newcase: { ...state.newcase, [field]: value } })),
}));
