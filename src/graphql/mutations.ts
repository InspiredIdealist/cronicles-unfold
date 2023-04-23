/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
      id
      name
      authorID
      storys {
        nextToken
      }
      storyfragments {
        nextToken
      }
      createdAt
      updatedAt
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
      authorID
      storys {
        nextToken
      }
      storyfragments {
        nextToken
      }
      createdAt
      updatedAt
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
      authorID
      storys {
        nextToken
      }
      storyfragments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
      id
      name
      StoryFragments {
        nextToken
      }
      Characters {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
      id
      name
      StoryFragments {
        nextToken
      }
      Characters {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
      id
      name
      StoryFragments {
        nextToken
      }
      Characters {
        nextToken
      }
      createdAt
      updatedAt
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
      storyID
      prompt
      fragment
      prevId
      createdAt
      authorID
      Characters {
        nextToken
      }
      updatedAt
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
      storyID
      prompt
      fragment
      prevId
      createdAt
      authorID
      Characters {
        nextToken
      }
      updatedAt
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
      storyID
      prompt
      fragment
      prevId
      createdAt
      authorID
      Characters {
        nextToken
      }
      updatedAt
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
      StoryFragments {
        nextToken
      }
      prevStoryId
      createdAt
      lastAddedToAt
      Author {
        id
        name
        createdAt
        updatedAt
      }
      Characters {
        nextToken
      }
      updatedAt
      storyAuthorId
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
      StoryFragments {
        nextToken
      }
      prevStoryId
      createdAt
      lastAddedToAt
      Author {
        id
        name
        createdAt
        updatedAt
      }
      Characters {
        nextToken
      }
      updatedAt
      storyAuthorId
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
      StoryFragments {
        nextToken
      }
      prevStoryId
      createdAt
      lastAddedToAt
      Author {
        id
        name
        createdAt
        updatedAt
      }
      Characters {
        nextToken
      }
      updatedAt
      storyAuthorId
    }
  }
`;
export const createStoryCharacter = /* GraphQL */ `
  mutation CreateStoryCharacter(
    $input: CreateStoryCharacterInput!
    $condition: ModelStoryCharacterConditionInput
  ) {
    createStoryCharacter(input: $input, condition: $condition) {
      id
      characterId
      storyId
      character {
        id
        name
        authorID
        createdAt
        updatedAt
      }
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        updatedAt
        storyAuthorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStoryCharacter = /* GraphQL */ `
  mutation UpdateStoryCharacter(
    $input: UpdateStoryCharacterInput!
    $condition: ModelStoryCharacterConditionInput
  ) {
    updateStoryCharacter(input: $input, condition: $condition) {
      id
      characterId
      storyId
      character {
        id
        name
        authorID
        createdAt
        updatedAt
      }
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        updatedAt
        storyAuthorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStoryCharacter = /* GraphQL */ `
  mutation DeleteStoryCharacter(
    $input: DeleteStoryCharacterInput!
    $condition: ModelStoryCharacterConditionInput
  ) {
    deleteStoryCharacter(input: $input, condition: $condition) {
      id
      characterId
      storyId
      character {
        id
        name
        authorID
        createdAt
        updatedAt
      }
      story {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        updatedAt
        storyAuthorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStoryFragmentCharacter = /* GraphQL */ `
  mutation CreateStoryFragmentCharacter(
    $input: CreateStoryFragmentCharacterInput!
    $condition: ModelStoryFragmentCharacterConditionInput
  ) {
    createStoryFragmentCharacter(input: $input, condition: $condition) {
      id
      characterId
      storyFragmentId
      character {
        id
        name
        authorID
        createdAt
        updatedAt
      }
      storyFragment {
        id
        storyID
        prompt
        fragment
        prevId
        createdAt
        authorID
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStoryFragmentCharacter = /* GraphQL */ `
  mutation UpdateStoryFragmentCharacter(
    $input: UpdateStoryFragmentCharacterInput!
    $condition: ModelStoryFragmentCharacterConditionInput
  ) {
    updateStoryFragmentCharacter(input: $input, condition: $condition) {
      id
      characterId
      storyFragmentId
      character {
        id
        name
        authorID
        createdAt
        updatedAt
      }
      storyFragment {
        id
        storyID
        prompt
        fragment
        prevId
        createdAt
        authorID
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStoryFragmentCharacter = /* GraphQL */ `
  mutation DeleteStoryFragmentCharacter(
    $input: DeleteStoryFragmentCharacterInput!
    $condition: ModelStoryFragmentCharacterConditionInput
  ) {
    deleteStoryFragmentCharacter(input: $input, condition: $condition) {
      id
      characterId
      storyFragmentId
      character {
        id
        name
        authorID
        createdAt
        updatedAt
      }
      storyFragment {
        id
        storyID
        prompt
        fragment
        prevId
        createdAt
        authorID
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
