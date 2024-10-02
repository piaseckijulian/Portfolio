import { type SchemaTypeDefinition } from 'sanity';
import { general, project, techStack } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [general, project, techStack]
};
