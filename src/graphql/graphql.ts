/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGuidanceInput = {
  id?: string | null,
  instructions?: string | null,
  codename?: string | null,
};

export type ModelGuidanceConditionInput = {
  instructions?: ModelStringInput | null,
  codename?: ModelStringInput | null,
  and?: Array< ModelGuidanceConditionInput | null > | null,
  or?: Array< ModelGuidanceConditionInput | null > | null,
  not?: ModelGuidanceConditionInput | null,
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

export type Guidance = {
  __typename: "Guidance",
  id: string,
  instructions?: string | null,
  codename?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGuidanceInput = {
  id: string,
  instructions?: string | null,
  codename?: string | null,
};

export type DeleteGuidanceInput = {
  id: string,
};

export type CreateCharacterInput = {
  id?: string | null,
  name?: string | null,
  ownerId: string,
  ownerType: string,
  storyCharactersId?: string | null,
};

export type ModelCharacterConditionInput = {
  name?: ModelStringInput | null,
  ownerId?: ModelStringInput | null,
  ownerType?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
  storyCharactersId?: ModelIDInput | null,
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
  ownerId: string,
  ownerType: string,
  story?: Story | null,
  createdAt: string,
  updatedAt: string,
  storyCharactersId?: string | null,
};

export type Story = {
  __typename: "Story",
  id: string,
  currentMessageId: string,
  storyRootId: string,
  storyFragments?: ModelStoryFragmentConnection | null,
  prevStoryId?: string | null,
  createdAt: string,
  lastAddedToAt: string,
  characters?: ModelCharacterConnection | null,
  name: string,
  updatedAt: string,
};

export type ModelStoryFragmentConnection = {
  __typename: "ModelStoryFragmentConnection",
  items:  Array<StoryFragment | null >,
  nextToken?: string | null,
};

export type StoryFragment = {
  __typename: "StoryFragment",
  id: string,
  fragment: string,
  createdAt: string,
  originType: string,
  originId: string,
  prevId?: string | null,
  story?: Story | null,
  updatedAt: string,
  storyStoryFragmentsId?: string | null,
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character | null >,
  nextToken?: string | null,
};

export type UpdateCharacterInput = {
  id: string,
  name?: string | null,
  ownerId?: string | null,
  ownerType?: string | null,
  storyCharactersId?: string | null,
};

export type DeleteCharacterInput = {
  id: string,
};

export type CreateStoryFragmentInput = {
  id?: string | null,
  fragment: string,
  createdAt?: string | null,
  originType: string,
  originId: string,
  prevId?: string | null,
  storyStoryFragmentsId?: string | null,
};

export type ModelStoryFragmentConditionInput = {
  fragment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  originType?: ModelStringInput | null,
  originId?: ModelStringInput | null,
  prevId?: ModelStringInput | null,
  and?: Array< ModelStoryFragmentConditionInput | null > | null,
  or?: Array< ModelStoryFragmentConditionInput | null > | null,
  not?: ModelStoryFragmentConditionInput | null,
  storyStoryFragmentsId?: ModelIDInput | null,
};

export type UpdateStoryFragmentInput = {
  id: string,
  fragment?: string | null,
  createdAt?: string | null,
  originType?: string | null,
  originId?: string | null,
  prevId?: string | null,
  storyStoryFragmentsId?: string | null,
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
  name: string,
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
};

export type UpdateStoryInput = {
  id: string,
  currentMessageId?: string | null,
  storyRootId?: string | null,
  prevStoryId?: string | null,
  createdAt?: string | null,
  lastAddedToAt?: string | null,
  name?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type ModelGuidanceFilterInput = {
  id?: ModelIDInput | null,
  instructions?: ModelStringInput | null,
  codename?: ModelStringInput | null,
  and?: Array< ModelGuidanceFilterInput | null > | null,
  or?: Array< ModelGuidanceFilterInput | null > | null,
  not?: ModelGuidanceFilterInput | null,
};

export type ModelGuidanceConnection = {
  __typename: "ModelGuidanceConnection",
  items:  Array<Guidance | null >,
  nextToken?: string | null,
};

export type ModelCharacterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  ownerId?: ModelStringInput | null,
  ownerType?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
  storyCharactersId?: ModelIDInput | null,
};

export type ModelStoryFragmentFilterInput = {
  id?: ModelIDInput | null,
  fragment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  originType?: ModelStringInput | null,
  originId?: ModelStringInput | null,
  prevId?: ModelStringInput | null,
  and?: Array< ModelStoryFragmentFilterInput | null > | null,
  or?: Array< ModelStoryFragmentFilterInput | null > | null,
  not?: ModelStoryFragmentFilterInput | null,
  storyStoryFragmentsId?: ModelIDInput | null,
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
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionGuidanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  instructions?: ModelSubscriptionStringInput | null,
  codename?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGuidanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionGuidanceFilterInput | null > | null,
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

export type ModelSubscriptionCharacterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  ownerId?: ModelSubscriptionStringInput | null,
  ownerType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
};

export type ModelSubscriptionStoryFragmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fragment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  originType?: ModelSubscriptionStringInput | null,
  originId?: ModelSubscriptionStringInput | null,
  prevId?: ModelSubscriptionStringInput | null,
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

export type CreateGuidanceMutationVariables = {
  input: CreateGuidanceInput,
  condition?: ModelGuidanceConditionInput | null,
};

export type CreateGuidanceMutation = {
  createGuidance?:  {
    __typename: "Guidance",
    id: string,
    instructions?: string | null,
    codename?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGuidanceMutationVariables = {
  input: UpdateGuidanceInput,
  condition?: ModelGuidanceConditionInput | null,
};

export type UpdateGuidanceMutation = {
  updateGuidance?:  {
    __typename: "Guidance",
    id: string,
    instructions?: string | null,
    codename?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGuidanceMutationVariables = {
  input: DeleteGuidanceInput,
  condition?: ModelGuidanceConditionInput | null,
};

export type DeleteGuidanceMutation = {
  deleteGuidance?:  {
    __typename: "Guidance",
    id: string,
    instructions?: string | null,
    codename?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    ownerId: string,
    ownerType: string,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storyCharactersId?: string | null,
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
    ownerId: string,
    ownerType: string,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storyCharactersId?: string | null,
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
    ownerId: string,
    ownerType: string,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storyCharactersId?: string | null,
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
    fragment: string,
    createdAt: string,
    originType: string,
    originId: string,
    prevId?: string | null,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    storyStoryFragmentsId?: string | null,
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
    fragment: string,
    createdAt: string,
    originType: string,
    originId: string,
    prevId?: string | null,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    storyStoryFragmentsId?: string | null,
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
    fragment: string,
    createdAt: string,
    originType: string,
    originId: string,
    prevId?: string | null,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    storyStoryFragmentsId?: string | null,
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
    storyFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    updatedAt: string,
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
    storyFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    updatedAt: string,
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
    storyFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    updatedAt: string,
  } | null,
};

export type GetGuidanceQueryVariables = {
  id: string,
};

export type GetGuidanceQuery = {
  getGuidance?:  {
    __typename: "Guidance",
    id: string,
    instructions?: string | null,
    codename?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGuidancesQueryVariables = {
  filter?: ModelGuidanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuidancesQuery = {
  listGuidances?:  {
    __typename: "ModelGuidanceConnection",
    items:  Array< {
      __typename: "Guidance",
      id: string,
      instructions?: string | null,
      codename?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    ownerId: string,
    ownerType: string,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storyCharactersId?: string | null,
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
      ownerId: string,
      ownerType: string,
      createdAt: string,
      updatedAt: string,
      storyCharactersId?: string | null,
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
    fragment: string,
    createdAt: string,
    originType: string,
    originId: string,
    prevId?: string | null,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    storyStoryFragmentsId?: string | null,
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
      fragment: string,
      createdAt: string,
      originType: string,
      originId: string,
      prevId?: string | null,
      updatedAt: string,
      storyStoryFragmentsId?: string | null,
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
    storyFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    updatedAt: string,
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
      name: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGuidanceSubscriptionVariables = {
  filter?: ModelSubscriptionGuidanceFilterInput | null,
};

export type OnCreateGuidanceSubscription = {
  onCreateGuidance?:  {
    __typename: "Guidance",
    id: string,
    instructions?: string | null,
    codename?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGuidanceSubscriptionVariables = {
  filter?: ModelSubscriptionGuidanceFilterInput | null,
};

export type OnUpdateGuidanceSubscription = {
  onUpdateGuidance?:  {
    __typename: "Guidance",
    id: string,
    instructions?: string | null,
    codename?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGuidanceSubscriptionVariables = {
  filter?: ModelSubscriptionGuidanceFilterInput | null,
};

export type OnDeleteGuidanceSubscription = {
  onDeleteGuidance?:  {
    __typename: "Guidance",
    id: string,
    instructions?: string | null,
    codename?: string | null,
    createdAt: string,
    updatedAt: string,
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
    ownerId: string,
    ownerType: string,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storyCharactersId?: string | null,
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
    ownerId: string,
    ownerType: string,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storyCharactersId?: string | null,
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
    ownerId: string,
    ownerType: string,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storyCharactersId?: string | null,
  } | null,
};

export type OnCreateStoryFragmentSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentFilterInput | null,
};

export type OnCreateStoryFragmentSubscription = {
  onCreateStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    fragment: string,
    createdAt: string,
    originType: string,
    originId: string,
    prevId?: string | null,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    storyStoryFragmentsId?: string | null,
  } | null,
};

export type OnUpdateStoryFragmentSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentFilterInput | null,
};

export type OnUpdateStoryFragmentSubscription = {
  onUpdateStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    fragment: string,
    createdAt: string,
    originType: string,
    originId: string,
    prevId?: string | null,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    storyStoryFragmentsId?: string | null,
  } | null,
};

export type OnDeleteStoryFragmentSubscriptionVariables = {
  filter?: ModelSubscriptionStoryFragmentFilterInput | null,
};

export type OnDeleteStoryFragmentSubscription = {
  onDeleteStoryFragment?:  {
    __typename: "StoryFragment",
    id: string,
    fragment: string,
    createdAt: string,
    originType: string,
    originId: string,
    prevId?: string | null,
    story?:  {
      __typename: "Story",
      id: string,
      currentMessageId: string,
      storyRootId: string,
      prevStoryId?: string | null,
      createdAt: string,
      lastAddedToAt: string,
      name: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    storyStoryFragmentsId?: string | null,
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
    storyFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    updatedAt: string,
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
    storyFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    updatedAt: string,
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
    storyFragments?:  {
      __typename: "ModelStoryFragmentConnection",
      nextToken?: string | null,
    } | null,
    prevStoryId?: string | null,
    createdAt: string,
    lastAddedToAt: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    updatedAt: string,
  } | null,
};
