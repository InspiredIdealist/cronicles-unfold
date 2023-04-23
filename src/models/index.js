// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Character, Author, StoryFragment, Story, StoryCharacter, StoryFragmentCharacter } = initSchema(schema);

export {
  Character,
  Author,
  StoryFragment,
  Story,
  StoryCharacter,
  StoryFragmentCharacter
};