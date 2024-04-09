export const schema = {
  types: [
    {
      title: 'Vessel News',
      name: 'vesselNews',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'SubTitle 1',
          name: 'subTitle1',
          type: 'string',
        },
        {
          title: 'Content 1',
          name: 'content1',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          title: 'SubTitle 2',
          name: 'subTitle2',
          type: 'string',
        },
        {
          title: 'Content 2',
          name: 'content2',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      title: 'French Vessel News',
      name: 'vesselNewsFr',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'SubTitle 1',
          name: 'subTitle1',
          type: 'string',
        },
        {
          title: 'Content 1',
          name: 'content1',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          title: 'SubTitle 2',
          name: 'subTitle2',
          type: 'string',
        },
        {
          title: 'Content 2',
          name: 'content2',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      title: 'Lead Times',
      name: 'leadtimes',
      type: 'document',
      fields: [
        {
          title: 'Location',
          name: 'location',
          type: 'string',
          options: {
            list: ['Vancouver', 'Calgary', 'Mississauga'],
          },
        },
        { title: 'Brites & Supplies', name: 'britesSupplies', type: 'number' },
        { title: 'PSL Application', name: 'pslApp', type: 'number' },
        { title: 'Shrink Sleeve Application', name: 'ss', type: 'number' },
      ],
    },
  ],
};
