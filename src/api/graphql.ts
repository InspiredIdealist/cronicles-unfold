/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCharacterInput = {
  id?: string | null,
  name?: string | null,
  authorID: string,
};

export type ModelCharacterConditionInput = {
  name?: ModelStringInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Character = {
  __typename: "Character",
  id: string,
  name?: string | null,
  authorID: string,
  storys?: ModelStoryCharacterConnection | null,
  storyfragments?: ModelStoryFragmentCharacterConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStoryCharacterConnection = {
  __typename: "ModelStoryCharacterConnection",
  items:  Array<StoryCharacter | null >,
  nextToken?: string | null,
};

export type StoryCharacter = {
  __typename: "StoryCharacter",
  id: string,
  characterId: string,
  storyId: string,
  character: Character,
  story: Story,
  createdAt: string,
  updatedAt: string,
};

export type Story = {
  __typename: "Story",
  id: string,
  currentMessageId: string,
  storyRootId: string,
  StoryFragments?: ModelStoryFragmentConnection | null,
  prevStoryId?: string | null,
  createdAt: string,
  lastAddedToAt: string,
  Author: Author,
  Characters?: ModelStoryCharacterConnection | null,
  name?: string | null,
  updatedAt: string,
  storyAuthorId: string,
};

export type ModelStoryFragmentConnection = {
  __typename: "ModelStoryFragmentConnection",
  items:  Array<StoryFragment | null >,
  nextToken?: string | null,
};

export type StoryFragment = {
  __typename: "StoryFragment",
  id: string,
  storyID: string,
  prompt?: string | null,
  fragment: string,
  prevId?: string | null,
  createdAt: string,
  authorID: string,
  Characters?: ModelStoryFragmentCharacterConnection | null,
  updatedAt: string,
};

export type ModelStoryFragmentCharacterConnection = {
  __typename: "ModelStoryFragmentCharacterConnection",
  items:  Array<StoryFragmentCharacter | null >,
  nextToken?: string | null,
};

export type StoryFragmentCharacter = {
  __typename: "StoryFragmentCharacter",
  id: string,
  characterId: string,
  storyFragmentId: string,
  character: Character,
  storyFragment: StoryFragment,
  createdAt: string,
  updatedAt: string,
};

export type Author = {
  __typename: "Author",
  id: string,
  name: string,
  StoryFragments?: ModelStoryFragmentConnection | null,
  Characters?: ModelCharacterConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character | null >,
  nextToken?: string | null,
};

export type UpdateCharacterInput = {
  id: string,
  name?: string | null,
  authorID?: string | null,
};

export type DeleteCharacterInput = {
  id: string,
};

export type CreateAuthorInput = {
  id?: string | null,
  name: string,
};

export type ModelAuthorConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorInput = {
  id: string,
  name?: string | null,
};

export type DeleteAuthorInput = {
  id: string,
};

export type CreateStoryFragmentInput = {
  id?: string | null,
  storyID: string,
  prompt?: string | null,
  fragment: string,
  prevId?: string | null,
  createdAt?: string | null,
  authorID: string,
};

export type ModelStoryFragmentConditionInput = {
  storyID?: ModelIDInput | null,
  prompt?: ModelStringInput | null,
  fragment?: ModelStringInput | null,
  prevId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelStoryFragmentConditionInput | null > | null,
  or?: Array< ModelStoryFragmentConditionInput | null > | null,
  not?: ModelStoryFragmentConditionInput | null,
};

export type UpdateStoryFragmentInput = {
  id: string,
  storyID?: string | null,
  prompt?: string | null,
  fragment?: string | null,
  prevId?: string | null,
  createdAt?: string | null,
  authorID?: string | null,
};

export type DeleteStoryFragmentInput = {
  id: string,
};

export type CreateStoryInput = {
  id?: string | null,
  currentMessageId: string,
  storyRootId: string,
  prevStoryId?: string | null,
  createdAt?: string | null,
  lastAddedToAt: string,
  name?: string | null,
  storyAuthorId: string,
};

export type ModelStoryConditionInput = {
  currentMessageId?: ModelStringInput | null,
  storyRootId?: ModelStringInput | null,
  prevStoryId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  lastAddedToAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
  storyAuthorId?: ModelIDInput | null,
};

export type UpdateStoryInput = {
  id: string,
  currentMessageId?: string | null,
  storyRootId?: string | null,
  prevStoryId?: string | null,
  createdAt?: string | null,
  lastAddedToAt?: string | null,
  name?: string | null,
  storyAuthorId?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type CreateStoryCharacterInput = {
  id?: string | null,
  characterId: string,
  storyId: string,
};

export type ModelStoryCharacterConditionInput = {
  characterId?: ModelIDInput | null,
  storyId?: ModelIDInput | null,
  and?: Array< ModelStoryCharacterConditionInput | null > | null,
  or?: Array< ModelStoryCharacterConditionInput | null > | null,
  not?: ModelStoryCharacterConditionInput | null,
};

export type UpdateStoryCharacterInput = {
  id: string,
  characterId?: string | null,
  storyId?: string | null,
};

export type DeleteStoryCharacterInput = {
  id: string,
};

export type CreateStoryFragmentCharacterInput = {
  id?: string | null,
  characterId: string,
  storyFragmentId: string,
};

export type ModelStoryFragmentCharacterConditionInput = {
  characterId?: ModelIDInput | null,
  storyFragmentId?: ModelIDInput | null,
  and?: Array< ModelStoryFragmentCharacterConditionInput | null > | null,
  or?: Array< ModelStoryFragmentCharacterConditionInput | null > | null,
  not?: ModelStoryFragmentCharacterConditionInput | null,
};

export type UpdateStoryFragmentCharacterInput = {
  id: string,
  characterId?: string | null,
  storyFragmentId?: string | null,
};

export type DeleteStoryFragmentCharacterInput = {
  id: string,
};

export type ModelCharacterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
};

export type ModelStoryFragmentFilterInput = {
  id?: ModelIDInput | null,
  storyID?: ModelIDInput | null,
  prompt?: ModelStringInput | null,
  fragment?: ModelStringInput | null,
  prevId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelStoryFragmentFilterInput | null > | null,
  or?: Array< ModelStoryFragmentFilterInput | null > | null,
  not?: ModelStoryFragmentFilterInput | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  currentMessageId?: ModelStringInput | null,
  storyRootId?: ModelStringInput | null,
  prevStoryId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  lastAddedToAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
  storyAuthorId?: ModelIDInput | null,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story | null >,
  nextToken?: string | null,
};

export type ModelStoryCharacterFilterInput = {
  id?: ModelIDInput | null,
  characterId?: ModelIDInput | null,
  storyId?: ModelIDInput | null,
  and?: Array< ModelStoryCharacterFilterInput | null > | null,
  or?: Array< ModelStoryCharacterFilterInput | null > | null,
  not?: ModelStoryCharacterFilterInput | null,
};

export type ModelStoryFragmentCharacterFilterInput = {
  id?: ModelIDInput | null,
  characterId?: ModelIDInput | null,
  storyFragmentId?: ModelIDInput | null,
  and?: Array< ModelStoryFragmentCharacterFilterInput | null > | null,
  or?: Array< ModelStoryFragmentCharacterFilterInput | null > | null,
  not?: ModelStoryFragmentCharacterFilterInput | null,
};

export type ModelSubscriptionCharacterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  authorID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
};

export type ModelSubscriptionStoryFragmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  storyID?: ModelSubscriptionIDInput | null,
  prompt?: ModelSubscriptionStringInput | null,
  fragment?: ModelSubscriptionStringInput | null,
  prevId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  authorID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStoryFragmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryFragmentFilterInput | null > | null,
};

export type ModelSubscriptionStoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  currentMessageId?: ModelSubscriptionStringInput | null,
  storyRootId?: ModelSubscriptionStringInput | null,
  prevStoryId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  lastAddedToAt?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryFilterInput | null > | null,
};

export type ModelSubscriptionStoryCharacterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  characterId?: ModelSubscriptionIDInput | null,
  storyId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStoryCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryCharacterFilterInput | null > | null,
};

export type ModelSubscriptionStoryFragmentCharacterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  characterId?: ModelSubscriptionIDInput | null,
  storyFragmentId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStoryFragmentCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryFragmentCharacterFilterInput | null > | null,
};

export type CreateCharacterMutationVariables = {
  input: CreateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type CreateCharacterMutation = {
  createCharacter?:  {
    __typename: "Character",
    id: string,
    name?: string | null,
    authorID: string,
    storys?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    storyfragments?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharacterMutationVariables = {
  input: UpdateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type UpdateCharacterMutation = {
  updateCharacter?:  {
    __typename: "Character",
    id: string,
    name?: string | null,
    authorID: string,
    storys?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    storyfragments?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharacterMutationVariables = {
  input: DeleteCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type DeleteCharacterMutation = {
  deleteCharacter?:  {
    __typename: "Character",
    id: string,
    name?: string | null,
    authorID: string,
    storys?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    storyfragments?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    Characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    Characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    Characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoryFragmentMutationVariables = {
  input: CreateStoryFragmentInput,
  condition?: ModelStoryFragmentConditionInput | null,
};

export type CreateStoryFragmentMutation = {
  createStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    storyID: string,
    prompt?: string | null,
    fragment: string,
    prevId?: string | null,
    createdAt: string,
    authorID: string,
    Characters?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateStoryFragmentMutationVariables = {
  input: UpdateStoryFragmentInput,
  condition?: ModelStoryFragmentConditionInput | null,
};

export type UpdateStoryFragmentMutation = {
  updateStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    storyID: string,
    prompt?: string | null,
    fragment: string,
    prevId?: string | null,
    createdAt: string,
    authorID: string,
    Characters?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteStoryFragmentMutationVariables = {
  input: DeleteStoryFragmentInput,
  condition?: ModelStoryFragmentConditionInput | null,
};

export type DeleteStoryFragmentMutation = {
  deleteStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    storyID: string,
    prompt?: string | null,
    fragment: string,
    prevId?: string | null,
    createdAt: string,
    authorID: string,
    Characters?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    currentMessageId: string,
    storyRootId: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    Author:  {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    Characters?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    updatedAt: string,
    storyAuthorId: string,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory?:  {
    __typename: "Story",
    id: string,
    currentMessageId: string,
    storyRootId: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    Author:  {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    Characters?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    updatedAt: string,
    storyAuthorId: string,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory?:  {
    __typename: "Story",
    id: string,
    currentMessageId: string,
    storyRootId: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    Author:  {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    Characters?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    updatedAt: string,
    storyAuthorId: string,
  } | null,
};

export type CreateStoryCharacterMutationVariables = {
  input: CreateStoryCharacterInput,
  condition?: ModelStoryCharacterConditionInput | null,
};

export type CreateStoryCharacterMutation = {
  createStoryCharacter?:  {
    __typename: "StoryCharacter",
    id: string,
    characterId: string,
    storyId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    story:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoryCharacterMutationVariables = {
  input: UpdateStoryCharacterInput,
  condition?: ModelStoryCharacterConditionInput | null,
};

export type UpdateStoryCharacterMutation = {
  updateStoryCharacter?:  {
    __typename: "StoryCharacter",
    id: string,
    characterId: string,
    storyId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    story:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoryCharacterMutationVariables = {
  input: DeleteStoryCharacterInput,
  condition?: ModelStoryCharacterConditionInput | null,
};

export type DeleteStoryCharacterMutation = {
  deleteStoryCharacter?:  {
    __typename: "StoryCharacter",
    id: string,
    characterId: string,
    storyId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    story:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoryFragmentCharacterMutationVariables = {
  input: CreateStoryFragmentCharacterInput,
  condition?: ModelStoryFragmentCharacterConditionInput | null,
};

export type CreateStoryFragmentCharacterMutation = {
  createStoryFragmentCharacter?:  {
    __typename: "StoryFragmentCharacter",
    id: string,
    characterId: string,
    storyFragmentId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    storyFragment:  {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoryFragmentCharacterMutationVariables = {
  input: UpdateStoryFragmentCharacterInput,
  condition?: ModelStoryFragmentCharacterConditionInput | null,
};

export type UpdateStoryFragmentCharacterMutation = {
  updateStoryFragmentCharacter?:  {
    __typename: "StoryFragmentCharacter",
    id: string,
    characterId: string,
    storyFragmentId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    storyFragment:  {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoryFragmentCharacterMutationVariables = {
  input: DeleteStoryFragmentCharacterInput,
  condition?: ModelStoryFragmentCharacterConditionInput | null,
};

export type DeleteStoryFragmentCharacterMutation = {
  deleteStoryFragmentCharacter?:  {
    __typename: "StoryFragmentCharacter",
    id: string,
    characterId: string,
    storyFragmentId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    storyFragment:  {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCharacterQueryVariables = {
  id: string,
};

export type GetCharacterQuery = {
  getCharacter?:  {
    __typename: "Character",
    id: string,
    name?: string | null,
    authorID: string,
    storys?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    storyfragments?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCharactersQueryVariables = {
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersQuery = {
  listCharacters?:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CharactersByAuthorIDQueryVariables = {
  authorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CharactersByAuthorIDQuery = {
  charactersByAuthorID?:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    Characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryFragmentQueryVariables = {
  id: string,
};

export type GetStoryFragmentQuery = {
  getStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    storyID: string,
    prompt?: string | null,
    fragment: string,
    prevId?: string | null,
    createdAt: string,
    authorID: string,
    Characters?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListStoryFragmentsQueryVariables = {
  filter?: ModelStoryFragmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoryFragmentsQuery = {
  listStoryFragments?:  {
    __typename: "ModelStoryFragmentConnection",
    items:  Array< {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryFragmentsByStoryIDQueryVariables = {
  storyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryFragmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryFragmentsByStoryIDQuery = {
  storyFragmentsByStoryID?:  {
    __typename: "ModelStoryFragmentConnection",
    items:  Array< {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryFragmentsByAuthorIDQueryVariables = {
  authorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryFragmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryFragmentsByAuthorIDQuery = {
  storyFragmentsByAuthorID?:  {
    __typename: "ModelStoryFragmentConnection",
    items:  Array< {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory?:  {
    __typename: "Story",
    id: string,
    currentMessageId: string,
    storyRootId: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    Author:  {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    Characters?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    updatedAt: string,
    storyAuthorId: string,
  } | null,
};

export type ListStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoriesQuery = {
  listStories?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryCharacterQueryVariables = {
  id: string,
};

export type GetStoryCharacterQuery = {
  getStoryCharacter?:  {
    __typename: "StoryCharacter",
    id: string,
    characterId: string,
    storyId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    story:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoryCharactersQueryVariables = {
  filter?: ModelStoryCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoryCharactersQuery = {
  listStoryCharacters?:  {
    __typename: "ModelStoryCharacterConnection",
    items:  Array< {
      __typename: "StoryCharacter",
      id: string,
      characterId: string,
      storyId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryCharactersByCharacterIdQueryVariables = {
  characterId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryCharactersByCharacterIdQuery = {
  storyCharactersByCharacterId?:  {
    __typename: "ModelStoryCharacterConnection",
    items:  Array< {
      __typename: "StoryCharacter",
      id: string,
      characterId: string,
      storyId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryCharactersByStoryIdQueryVariables = {
  storyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryCharactersByStoryIdQuery = {
  storyCharactersByStoryId?:  {
    __typename: "ModelStoryCharacterConnection",
    items:  Array< {
      __typename: "StoryCharacter",
      id: string,
      characterId: string,
      storyId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryFragmentCharacterQueryVariables = {
  id: string,
};

export type GetStoryFragmentCharacterQuery = {
  getStoryFragmentCharacter?:  {
    __typename: "StoryFragmentCharacter",
    id: string,
    characterId: string,
    storyFragmentId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    storyFragment:  {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoryFragmentCharactersQueryVariables = {
  filter?: ModelStoryFragmentCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoryFragmentCharactersQuery = {
  listStoryFragmentCharacters?:  {
    __typename: "ModelStoryFragmentCharacterConnection",
    items:  Array< {
      __typename: "StoryFragmentCharacter",
      id: string,
      characterId: string,
      storyFragmentId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryFragmentCharactersByCharacterIdQueryVariables = {
  characterId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryFragmentCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryFragmentCharactersByCharacterIdQuery = {
  storyFragmentCharactersByCharacterId?:  {
    __typename: "ModelStoryFragmentCharacterConnection",
    items:  Array< {
      __typename: "StoryFragmentCharacter",
      id: string,
      characterId: string,
      storyFragmentId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryFragmentCharactersByStoryFragmentIdQueryVariables = {
  storyFragmentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryFragmentCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryFragmentCharactersByStoryFragmentIdQuery = {
  storyFragmentCharactersByStoryFragmentId?:  {
    __typename: "ModelStoryFragmentCharacterConnection",
    items:  Array< {
      __typename: "StoryFragmentCharacter",
      id: string,
      characterId: string,
      storyFragmentId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
};

export type OnCreateCharacterSubscription = {
  onCreateCharacter?:  {
    __typename: "Character",
    id: string,
    name?: string | null,
    authorID: string,
    storys?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    storyfragments?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
};

export type OnUpdateCharacterSubscription = {
  onUpdateCharacter?:  {
    __typename: "Character",
    id: string,
    name?: string | null,
    authorID: string,
    storys?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    storyfragments?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
};

export type OnDeleteCharacterSubscription = {
  onDeleteCharacter?:  {
    __typename: "Character",
    id: string,
    name?: string | null,
    authorID: string,
    storys?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    storyfragments?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    Characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    Characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    Characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoryFragmentSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentFilterInput | null,
};

export type OnCreateStoryFragmentSubscription = {
  onCreateStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    storyID: string,
    prompt?: string | null,
    fragment: string,
    prevId?: string | null,
    createdAt: string,
    authorID: string,
    Characters?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoryFragmentSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentFilterInput | null,
};

export type OnUpdateStoryFragmentSubscription = {
  onUpdateStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    storyID: string,
    prompt?: string | null,
    fragment: string,
    prevId?: string | null,
    createdAt: string,
    authorID: string,
    Characters?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoryFragmentSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentFilterInput | null,
};

export type OnDeleteStoryFragmentSubscription = {
  onDeleteStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    storyID: string,
    prompt?: string | null,
    fragment: string,
    prevId?: string | null,
    createdAt: string,
    authorID: string,
    Characters?:  {
      __typename: "ModelStoryFragmentCharacterConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    currentMessageId: string,
    storyRootId: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    Author:  {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    Characters?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    updatedAt: string,
    storyAuthorId: string,
  } | null,
};

export type OnUpdateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    currentMessageId: string,
    storyRootId: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    Author:  {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    Characters?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    updatedAt: string,
    storyAuthorId: string,
  } | null,
};

export type OnDeleteStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    currentMessageId: string,
    storyRootId: string,
    StoryFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    Author:  {
      __typename: "Author",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    Characters?:  {
      __typename: "ModelStoryCharacterConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    updatedAt: string,
    storyAuthorId: string,
  } | null,
};

export type OnCreateStoryCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionStoryCharacterFilterInput | null,
};

export type OnCreateStoryCharacterSubscription = {
  onCreateStoryCharacter?:  {
    __typename: "StoryCharacter",
    id: string,
    characterId: string,
    storyId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    story:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoryCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionStoryCharacterFilterInput | null,
};

export type OnUpdateStoryCharacterSubscription = {
  onUpdateStoryCharacter?:  {
    __typename: "StoryCharacter",
    id: string,
    characterId: string,
    storyId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    story:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoryCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionStoryCharacterFilterInput | null,
};

export type OnDeleteStoryCharacterSubscription = {
  onDeleteStoryCharacter?:  {
    __typename: "StoryCharacter",
    id: string,
    characterId: string,
    storyId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    story:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name?: string | null,
      updatedAt: string,
      storyAuthorId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoryFragmentCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentCharacterFilterInput | null,
};

export type OnCreateStoryFragmentCharacterSubscription = {
  onCreateStoryFragmentCharacter?:  {
    __typename: "StoryFragmentCharacter",
    id: string,
    characterId: string,
    storyFragmentId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    storyFragment:  {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoryFragmentCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentCharacterFilterInput | null,
};

export type OnUpdateStoryFragmentCharacterSubscription = {
  onUpdateStoryFragmentCharacter?:  {
    __typename: "StoryFragmentCharacter",
    id: string,
    characterId: string,
    storyFragmentId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    storyFragment:  {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoryFragmentCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentCharacterFilterInput | null,
};

export type OnDeleteStoryFragmentCharacterSubscription = {
  onDeleteStoryFragmentCharacter?:  {
    __typename: "StoryFragmentCharacter",
    id: string,
    characterId: string,
    storyFragmentId: string,
    character:  {
      __typename: "Character",
      id: string,
      name?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    },
    storyFragment:  {
      __typename: "StoryFragment",
      id: string,
      storyID: string,
      prompt?: string | null,
      fragment: string,
      prevId?: string | null,
      createdAt: string,
      authorID: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
