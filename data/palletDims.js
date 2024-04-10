export default function getPalletInfo(location, canSize, application) {
  const palletDims = {
    maxPalletHeight: {
      'Mississauga': {
        '355ml STD': {
          'PSL': 17,
          'Shrink Sleeve': 21,
        },
        '355ml Sleek': {
          'PSL': 13,
          'Shrink Sleeve': 16,
        },
        '250ml Slim': {
          'PSL': 9,
          'Shrink Sleeve': 17,
        },
        '473ml STD': {
          'PSL': 9,
          'Shrink Sleeve': 13,
        },
      },
      'Vancouver': {
        '355ml STD': {
          'PSL': 11,
          'Shrink Sleeve': 17,
        },
        '355ml Sleek': {
          'PSL': 9,
          'Shrink Sleeve': 13,
        },
        '250ml Slim': {
          'PSL': 9,
          'Shrink Sleeve': 17,
        },
        '473ml STD': {
          'PSL': 9,
          'Shrink Sleeve': 13,
        },
      },
      'Calgary': {
        '355ml STD': {
          'PSL': 11,
          'Shrink Sleeve': 17,
        },
        '355ml Sleek': {
          'PSL': 9,
          'Shrink Sleeve': 13,
        },
        '250ml Slim': {
          'PSL': 9,
          'Shrink Sleeve': 17,
        },
        '473ml STD': {
          'PSL': 9,
          'Shrink Sleeve': 13,
        },
      },
    },
    cansPerLayer: {
      '355ml STD': 389,
      '355ml Sleek': 506,
      '250ml Slim': 575,
      '473ml STD': 389,
    },
  };

  const maxHeight = palletDims.maxPalletHeight[location][canSize][application];
  const cansPerLayer = palletDims.cansPerLayer[canSize];

  return { maxHeight, cansPerLayer };
}
