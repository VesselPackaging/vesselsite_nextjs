const shippingTime = (location) => {
  switch (location.toLowerCase()) {
    case 'calgary':
      return 2;
    case 'vancouver':
      return 1;
    case 'mississauga':
      return 5;
    default:
      return 0;
  }
};

export const getLeadtime = (order, leadtimes) => {
  const locationLeadtimes = leadtimes[order.location.toLowerCase()];
  let newDays = 0;
  if (order.newOrReorder === 'new') {
    newDays = 3;
  }

  if (!locationLeadtimes) {
    return null;
  }

  let additionalDays = 0;
  let shipTime = shippingTime(order.location);
  if (order.printingType === 'Flexo') {
    additionalDays = 3 + 15 + shipTime; // processing + printing + shipping
  } else if (order.printingType === 'Digital') {
    if (order.application === 'Shrink Sleeve') {
      additionalDays = 1 + 2 + shipTime; // processing + printing + shipping
    } else if (order.application === 'PSL') {
      additionalDays = 1 + 2 + shipTime; // processing + printing + shipping
    }
  }

  switch (order.orderType) {
    case 'canapp':
      if (order.application === 'Shrink Sleeve') {
        return locationLeadtimes.ss + additionalDays;
      } else if (order.application === 'PSL') {
        return locationLeadtimes.pslApp + additionalDays;
      } else {
        return null;
      }
    case 'labelsonly':
      return additionalDays + newDays;
    case 'suppliesonly':
    case 'blankcans':
      return locationLeadtimes.britesSupplies;
    case 'allinone':
      if (order.application === 'Shrink Sleeve') {
        return locationLeadtimes.ss + additionalDays + newDays;
      } else if (order.application === 'PSL') {
        return locationLeadtimes.pslApp + additionalDays + newDays;
      }
      break;
    default:
      return null;
  }
};
