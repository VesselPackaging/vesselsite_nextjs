const locations = {
  Calgary: {
    name: 'Calgary',
    salesEmail: 'evan.singer@vesselpackaging.com',
    warehouse: {
      canFormats: ['355ml STD', '473ml STD', '355ml Sleek', '250ml Slim'],
      cans: {
        '355ml STD': {
          volume: 0.355,
          layerFactor: 389,
          labelType: {
            'Blank Cans': {
              min: 10,
              max: 420,
              palletOptions: [
                ['Half/Demie', 11],
                ['Tall/Grande', 17],
                ['Full/Complète', 21],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 840,
              palletOptions: [
                ['Half/Demie', 10],
                ['Full/Complète', 17],
              ],
            },
            PSL: {
              min: 3,
              max: 88,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 11],
              ],
            },
          },
        },
        '473ml STD': {
          volume: 0.473,
          layerFactor: 389,
          labelType: {
            'Blank Cans': {
              min: 8,
              max: 640,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Courte', 13],
                ['Full/Complète', 16],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 520,
              palletOptions: [
                ['Half/Demie', 7],
                ['Full/Complète', 13],
              ],
            },
            PSL: {
              min: 3,
              max: 90,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 9],
              ],
            },
          },
        },
        '355ml Sleek': {
          volume: 0.355,
          layerFactor: 506,
          labelType: {
            'Blank Cans': {
              min: 10,
              max: 420,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 16],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 840,
              palletOptions: [
                ['Half/Demie', 10],
                ['Full/Complète', 13],
              ],
            },
            PSL: {
              min: 3,
              max: 88,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 9],
              ],
            },
          },
        },
        '250ml Slim': {
          volume: 0.25,
          layerFactor: 575,
          labelType: {
            'Blank Cans': {
              min: 8,
              max: 340,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Courte', 9],
                ['Full/Complète', 17],
              ],
            },
            Printed: {
              min: 10,
              max: 340,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 17],
              ],
            },
            'Shrink Sleeve': {
              min: 9,
              max: 680,
              palletOptions: [
                ['Half/Demie', 9],
                ['Full/Complète', 17],
              ],
            },
            PSL: {
              min: 3,
              max: 100,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 10],
              ],
            },
          },
        },
      },
      tray: {
        format: 'Bundles / Paquets',
        units: 50,
        max: 200,
        types: ['Standard', 'Sleek', 'Slim'],
      },
      end: {
        max: 624,
        types: [
          ['200 B64 (250 ml Slim Cans Only)', 600],
          ['202 LOE REC Epoxy', 580],
          ['202 SuperEnd REC Epoxy', 580],
        ],
      },
      paktechTypes: [
        ['4pk Black (788/box)', 788, 4],
        ['6pk Black (510/box)', 510, 6],
      ],
    },
  },

  Vancouver: {
    name: 'Vancouver',
    salesEmail: 'evan.singer@vesselpackaging.com',
    warehouse: {
      canFormats: ['355ml STD', '473ml STD', '355ml Sleek', '250ml Slim'],
      cans: {
        '355ml STD': {
          volume: 0.355,
          layerFactor: 389,
          labelType: {
            'Blank Cans': {
              min: 10,
              max: 420,
              palletOptions: [
                ['Half/Demie', 10],
                ['Half/Demie', 11],
                ['Tall/Grande', 17],
                ['Full/Complète', 21],
              ],
            },
            Printed: {
              min: 10,
              max: 420,
              palletOptions: [
                ['Half/Demie', 10],
                ['Half/Demie', 11],
                ['Tall/Grande', 17],
                ['Full/Complète', 21],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 680,
              palletOptions: [
                ['Half/Demie', 10],
                ['Full/Complète', 17],
              ],
            },
            PSL: {
              min: 3,
              max: 110,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 11],
              ],
            },
          },
        },
        '473ml STD': {
          volume: 0.473,
          layerFactor: 389,
          labelType: {
            'Blank Cans': {
              min: 8,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Court', 13],
                ['Full/Complète', 16],
              ],
            },
            Printed: {
              min: 8,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Court', 13],
                ['Full/Complète', 16],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 560,
              palletOptions: [
                ['Half/Demie', 7],
                ['Full/Complète', 13],
              ],
            },
            PSL: {
              min: 3,
              max: 90,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 9],
              ],
            },
          },
        },
        '355ml Sleek': {
          volume: 0.355,
          layerFactor: 506,
          labelType: {
            'Blank Cans': {
              min: 10,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 16],
              ],
            },
            Printed: {
              min: 10,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 16],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 560,
              palletOptions: [
                ['Half/Demie', 6],
                ['Full/Complète', 13],
              ],
            },
            PSL: {
              min: 3,
              max: 90,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 9],
              ],
            },
          },
        },
        '250ml Slim': {
          volume: 0.25,
          layerFactor: 575,
          labelType: {
            'Blank Cans': {
              min: 8,
              max: 340,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Courte', 9],
                ['Full/Complète', 17],
              ],
            },
            Printed: {
              min: 10,
              max: 340,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 17],
              ],
            },
            'Shrink Sleeve': {
              min: 9,
              max: 680,
              palletOptions: [
                ['Half/Demie', 9],
                ['Full/Complète', 17],
              ],
            },
            PSL: {
              min: 3,
              max: 100,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 10],
              ],
            },
          },
        },
      },
      tray: {
        format: 'Bundles / Paquets',
        units: 50,
        max: 200,
        types: ['Standard', 'Sleek', 'Slim'],
      },
      end: {
        max: 624,
        types: [
          ['200 B64 (250 ml Slim Cans Only)', 600],
          ['202 LOE REC Epoxy', 580],
          ['202 LOE 10 STATE USA BPANI', 580],
          ['202 SuperEnd REC Epoxy', 580],
        ],
      },
      paktechTypes: [
        ['4pk Black (788/box)', 788, 4],
        ['6pk Black (510/box)', 510, 6],
        ['4pk White (788/box)', 788, 4],
        ['6pk White (510/box)', 510, 6],
      ],
    },
  },

  Mississauga: {
    name: 'Mississauga',
    salesEmail: 'evan.singer@vesselpackaging.com',
    warehouse: {
      canFormats: ['355ml STD', '473ml STD', '355ml Sleek', '250ml Slim'],
      cans: {
        '355ml STD': {
          volume: 0.355,
          layerFactor: 389,
          labelType: {
            'Blank Cans': {
              min: 11,
              max: 420,
              palletOptions: [
                ['Half/Demie', 11],
                ['Tall/Grande', 17],
                ['Full/Complète', 21],
              ],
            },
            Printed: {
              min: 11,
              max: 420,
              palletOptions: [
                ['Half/Demie', 11],
                ['Tall/Grande', 17],
                ['Full/Complète', 21],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 640,
              palletOptions: [
                ['Half/Demie', 10],
                ['Tall/Grande', 16],
                ['Full/Complète', 21],
              ],
            },
            PSL: {
              min: 3,
              max: 100,
              palletOptions: [
                ['Half/Demie', 5],
                ['Tall/Grande', 10],
                ['Full/Complète', 17],
              ],
            },
          },
        },
        '473ml STD': {
          volume: 0.473,
          layerFactor: 389,
          labelType: {
            'Blank Cans': {
              min: 8,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Courte', 13],
                ['Full/Complète', 16],
              ],
            },
            Printed: {
              min: 8,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Courte', 13],
                ['Full/Complète', 16],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 560,
              palletOptions: [
                ['Half/Demie', 7],
                ['Short/Courte', 13],
                ['Full/Complète', 16],
              ],
            },
            PSL: {
              min: 3,
              max: 70,
              palletOptions: [
                ['Half/Demie', 4],
                ['Short/Courte', 7],
                ['Full/Complète', 13],
              ],
            },
          },
        },
        '355ml Sleek': {
          volume: 0.355,
          layerFactor: 506,
          labelType: {
            'Blank Cans': {
              min: 10,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 16],
              ],
            },
            Printed: {
              min: 10,
              max: 320,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 16],
              ],
            },
            'Shrink Sleeve': {
              min: 3,
              max: 640,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Courte', 13],
                ['Full/Complète', 16],
              ],
            },
            PSL: {
              min: 3,
              max: 70,
              palletOptions: [
                ['Half/Demie', 4],
                ['Short/Courte', 7],
                ['Full/Complète', 13],
              ],
            },
          },
        },
        '250ml Slim': {
          volume: 0.25,
          layerFactor: 575,
          labelType: {
            'Blank Cans': {
              min: 8,
              max: 340,
              palletOptions: [
                ['Half/Demie', 8],
                ['Short/Courte', 9],
                ['Full/Complète', 17],
              ],
            },
            Printed: {
              min: 10,
              max: 340,
              palletOptions: [
                ['Half/Demie', 8],
                ['Full/Complète', 17],
              ],
            },
            'Shrink Sleeve': {
              min: 9,
              max: 680,
              palletOptions: [
                ['Half/Demie', 9],
                ['Full/Complète', 17],
              ],
            },
            PSL: {
              min: 3,
              max: 100,
              palletOptions: [
                ['Half/Demie', 5],
                ['Full/Complète', 10],
              ],
            },
          },
        },
      },
      tray: {
        format: 'Trays / Plateaux',
        units: 1,
        max: 5000,
        types: ['Standard', 'Sleek', 'Slim'],
      },
      end: {
        max: 624,
        types: [
          ['200 B64 (250 ml Slim Cans Only)', 600],
          ['202 SuperEnd REC Epoxy', 580],
          ['202 LOE REC Epoxy', 580],
          ['202 LOE 10 STATE USA BPANI', 580],
        ],
      },
      paktechTypes: [
        ['4pk Black (788/box)', 788, 4],
        ['6pk Black (510/box)', 510, 6],
        ['4pk White (788/box)', 788, 4],
        ['6pk White (510/box)', 510, 6],
      ],
    },
  },
};

export default locations;
