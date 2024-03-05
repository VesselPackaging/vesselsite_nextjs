export const getLeadtime = (order, leadtimes) => {
  const locationLeadtimes = leadtimes[order.location.toLowerCase()];

  if (!locationLeadtimes) {
    return null;
  }

  switch (order.orderType) {
    case 'canapp':
      if (order.application === 'Shrink Sleeve') {
        return locationLeadtimes.ss;
      } else if (order.application === 'PSL') {
        return locationLeadtimes.pslApp;
      } else {
        return null;
      }
    case 'labelsonly':
      return locationLeadtimes.labelsOnly;
    case 'suppliesonly':
    case 'blankcans':
      return locationLeadtimes.britesSupplies;
    case 'allinone':
      if (order.application === 'Shrink Sleeve') {
        return locationLeadtimes.ai1Ss;
      } else if (order.application === 'PSL') {
        return locationLeadtimes.ai1Psl;
      } else {
        return null;
      }
    default:
      return null;
  }
};
