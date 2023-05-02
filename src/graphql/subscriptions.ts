/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onCreateCharacter(filter: $filter) {
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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onUpdateCharacter(filter: $filter) {
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onDeleteCharacter(filter: $filter) {
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
export const onCreateStoryFragment = /* GraphQL */ `
  subscription OnCreateStoryFragment(
    $filter: ModelSubscriptionStoryFragmentFilterInput
  ) {
    onCreateStoryFragment(filter: $filter) {
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
export const onUpdateStoryFragment = /* GraphQL */ `
  subscription OnUpdateStoryFragment(
    $filter: ModelSubscriptionStoryFragmentFilterInput
  ) {
    onUpdateStoryFragment(filter: $filter) {
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
export const onDeleteStoryFragment = /* GraphQL */ `
  subscription OnDeleteStoryFragment(
    $filter: ModelSubscriptionStoryFragmentFilterInput
  ) {
    onDeleteStoryFragment(filter: $filter) {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory($filter: ModelSubscriptionStoryFilterInput) {
    onCreateStory(filter: $filter) {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory($filter: ModelSubscriptionStoryFilterInput) {
    onUpdateStory(filter: $filter) {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory($filter: ModelSubscriptionStoryFilterInput) {
    onDeleteStory(filter: $filter) {
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
