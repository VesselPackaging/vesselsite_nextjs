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
    // Define more document types if needed
  ]
}
