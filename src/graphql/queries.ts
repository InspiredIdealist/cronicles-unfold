/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuidance = /* GraphQL */ `
  query GetGuidance($id: ID!) {
    getGuidance(id: $id) {
      id
      instructions
      codename
      createdAt
      updatedAt
    }
  }
`;
export const listGuidances = /* GraphQL */ `
  query ListGuidances(
    $filter: ModelGuidanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuidances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        instructions
        codename
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
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
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ownerId
        ownerType
        createdAt
        updatedAt
        storyCharactersId
      }
      nextToken
    }
  }
`;
export const getStoryFragment = /* GraphQL */ `
  query GetStoryFragment($id: ID!) {
    getStoryFragment(id: $id) {
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
export const listStoryFragments = /* GraphQL */ `
  query ListStoryFragments(
    $filter: ModelStoryFragmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoryFragments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fragment
        createdAt
        originType
        originId
        prevId
        updatedAt
        storyStoryFragmentsId
      }
      nextToken
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
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
export const listStories = /* GraphQL */ `
  query ListStories(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        currentMessageId
        storyRootId
        prevStoryId
        createdAt
        lastAddedToAt
        name
        updatedAt
      }
      nextToken
    }
  }
`;
