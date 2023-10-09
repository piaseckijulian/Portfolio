export default {
  name: 'other',
  type: 'document',
  title: 'Other',
  fields: [
    {
      name: 'tech_stack_order',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      title: 'Tech Stack Order',
    },
  ],
};
