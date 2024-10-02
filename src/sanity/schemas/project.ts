export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'desc', type: 'string', title: 'Description' },
    { name: 'image', type: 'image', title: 'Image' },
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      of: [{ type: 'string' }]
    },
    { name: 'liveSiteUrl', type: 'string', title: 'Live Site URL' },
    { name: 'githubUrl', type: 'string', title: 'Github URL' }
  ]
};
