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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onUpdateCharacter(filter: $filter) {
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onDeleteCharacter(filter: $filter) {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onCreateAuthor(filter: $filter) {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onUpdateAuthor(filter: $filter) {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onDeleteAuthor(filter: $filter) {
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
export const onCreateStoryFragment = /* GraphQL */ `
  subscription OnCreateStoryFragment(
    $filter: ModelSubscriptionStoryFragmentFilterInput
  ) {
    onCreateStoryFragment(filter: $filter) {
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
export const onUpdateStoryFragment = /* GraphQL */ `
  subscription OnUpdateStoryFragment(
    $filter: ModelSubscriptionStoryFragmentFilterInput
  ) {
    onUpdateStoryFragment(filter: $filter) {
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
export const onDeleteStoryFragment = /* GraphQL */ `
  subscription OnDeleteStoryFragment(
    $filter: ModelSubscriptionStoryFragmentFilterInput
  ) {
    onDeleteStoryFragment(filter: $filter) {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory($filter: ModelSubscriptionStoryFilterInput) {
    onCreateStory(filter: $filter) {
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
      name
      updatedAt
      storyAuthorId
    }
  }
`;
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory($filter: ModelSubscriptionStoryFilterInput) {
    onUpdateStory(filter: $filter) {
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
      name
      updatedAt
      storyAuthorId
    }
  }
`;
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory($filter: ModelSubscriptionStoryFilterInput) {
    onDeleteStory(filter: $filter) {
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
      name
      updatedAt
      storyAuthorId
    }
  }
`;
export const onCreateStoryCharacter = /* GraphQL */ `
  subscription OnCreateStoryCharacter(
    $filter: ModelSubscriptionStoryCharacterFilterInput
  ) {
    onCreateStoryCharacter(filter: $filter) {
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
        name
        updatedAt
        storyAuthorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStoryCharacter = /* GraphQL */ `
  subscription OnUpdateStoryCharacter(
    $filter: ModelSubscriptionStoryCharacterFilterInput
  ) {
    onUpdateStoryCharacter(filter: $filter) {
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
        name
        updatedAt
        storyAuthorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStoryCharacter = /* GraphQL */ `
  subscription OnDeleteStoryCharacter(
    $filter: ModelSubscriptionStoryCharacterFilterInput
  ) {
    onDeleteStoryCharacter(filter: $filter) {
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
        name
        updatedAt
        storyAuthorId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStoryFragmentCharacter = /* GraphQL */ `
  subscription OnCreateStoryFragmentCharacter(
    $filter: ModelSubscriptionStoryFragmentCharacterFilterInput
  ) {
    onCreateStoryFragmentCharacter(filter: $filter) {
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
export const onUpdateStoryFragmentCharacter = /* GraphQL */ `
  subscription OnUpdateStoryFragmentCharacter(
    $filter: ModelSubscriptionStoryFragmentCharacterFilterInput
  ) {
    onUpdateStoryFragmentCharacter(filter: $filter) {
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
export const onDeleteStoryFragmentCharacter = /* GraphQL */ `
  subscription OnDeleteStoryFragmentCharacter(
    $filter: ModelSubscriptionStoryFragmentCharacterFilterInput
  ) {
    onDeleteStoryFragmentCharacter(filter: $filter) {
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
