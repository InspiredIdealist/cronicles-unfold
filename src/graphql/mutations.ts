/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGuidance = /* GraphQL */ `
  mutation CreateGuidance(
    $input: CreateGuidanceInput!
    $condition: ModelGuidanceConditionInput
  ) {
    createGuidance(input: $input, condition: $condition) {
      id
      instructions
      codename
      createdAt
      updatedAt
    }
  }
`;
export const updateGuidance = /* GraphQL */ `
  mutation UpdateGuidance(
    $input: UpdateGuidanceInput!
    $condition: ModelGuidanceConditionInput
  ) {
    updateGuidance(input: $input, condition: $condition) {
      id
      instructions
      codename
      createdAt
      updatedAt
    }
  }
`;
export const deleteGuidance = /* GraphQL */ `
  mutation DeleteGuidance(
    $input: DeleteGuidanceInput!
    $condition: ModelGuidanceConditionInput
  ) {
    deleteGuidance(input: $input, condition: $condition) {
      id
      instructions
      codename
      createdAt
      updatedAt
    }
  }
`;
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
      id
      name
      ownerId
      ownerType
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        name
        updatedAt
      }
      createdAt
      updatedAt
      storyCharactersId
    }
  }
`;
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
      id
      name
      ownerId
      ownerType
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        name
        updatedAt
      }
      createdAt
      updatedAt
      storyCharactersId
    }
  }
`;
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
      id
      name
      ownerId
      ownerType
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        name
        updatedAt
      }
      createdAt
      updatedAt
      storyCharactersId
    }
  }
`;
export const createStoryFragment = /* GraphQL */ `
  mutation CreateStoryFragment(
    $input: CreateStoryFragmentInput!
    $condition: ModelStoryFragmentConditionInput
  ) {
    createStoryFragment(input: $input, condition: $condition) {
      id
      fragment
      createdAt
      originType
      originId
      prevId
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        name
        updatedAt
      }
      updatedAt
      storyStoryFragmentsId
    }
  }
`;
export const updateStoryFragment = /* GraphQL */ `
  mutation UpdateStoryFragment(
    $input: UpdateStoryFragmentInput!
    $condition: ModelStoryFragmentConditionInput
  ) {
    updateStoryFragment(input: $input, condition: $condition) {
      id
      fragment
      createdAt
      originType
      originId
      prevId
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        name
        updatedAt
      }
      updatedAt
      storyStoryFragmentsId
    }
  }
`;
export const deleteStoryFragment = /* GraphQL */ `
  mutation DeleteStoryFragment(
    $input: DeleteStoryFragmentInput!
    $condition: ModelStoryFragmentConditionInput
  ) {
    deleteStoryFragment(input: $input, condition: $condition) {
      id
      fragment
      createdAt
      originType
      originId
      prevId
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        name
        updatedAt
      }
      updatedAt
      storyStoryFragmentsId
    }
  }
`;
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
      id
      currentMessageId
      storyRootId
      storyFragments {
        nextToken
      }
      prevStoryId
      createdAt
      lastAddedToAt
      characters {
        nextToken
      }
      name
      updatedAt
    }
  }
`;
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
      id
      currentMessageId
      storyRootId
      storyFragments {
        nextToken
      }
      prevStoryId
      createdAt
      lastAddedToAt
      characters {
        nextToken
      }
      name
      updatedAt
    }
  }
`;
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
      id
      currentMessageId
      storyRootId
      storyFragments {
        nextToken
      }
      prevStoryId
      createdAt
      lastAddedToAt
      characters {
        nextToken
      }
      name
      updatedAt
    }
  }
`;
