export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'tech_stack',
      type: 'array',
      title: 'Tech Stack',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'live_site_url',
      type: 'string',
      title: 'Live Site URL',
    },
    {
      name: 'github_url',
      type: 'string',
      title: 'Github URL',
    },
  ],
};
