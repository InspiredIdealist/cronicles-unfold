/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
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
        authorID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const charactersByAuthorID = /* GraphQL */ `
  query CharactersByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    charactersByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        authorID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
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
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStoryFragment = /* GraphQL */ `
  query GetStoryFragment($id: ID!) {
    getStoryFragment(id: $id) {
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
export const listStoryFragments = /* GraphQL */ `
  query ListStoryFragments(
    $filter: ModelStoryFragmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoryFragments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storyID
        prompt
        fragment
        prevId
        createdAt
        authorID
        updatedAt
      }
      nextToken
    }
  }
`;
export const storyFragmentsByStoryID = /* GraphQL */ `
  query StoryFragmentsByStoryID(
    $storyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoryFragmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storyFragmentsByStoryID(
      storyID: $storyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storyID
        prompt
        fragment
        prevId
        createdAt
        authorID
        updatedAt
      }
      nextToken
    }
  }
`;
export const storyFragmentsByAuthorID = /* GraphQL */ `
  query StoryFragmentsByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoryFragmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storyFragmentsByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storyID
        prompt
        fragment
        prevId
        createdAt
        authorID
        updatedAt
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
        storyAuthorId
      }
      nextToken
    }
  }
`;
export const getStoryCharacter = /* GraphQL */ `
  query GetStoryCharacter($id: ID!) {
    getStoryCharacter(id: $id) {
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
export const listStoryCharacters = /* GraphQL */ `
  query ListStoryCharacters(
    $filter: ModelStoryCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoryCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        characterId
        storyId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const storyCharactersByCharacterId = /* GraphQL */ `
  query StoryCharactersByCharacterId(
    $characterId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoryCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storyCharactersByCharacterId(
      characterId: $characterId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        storyId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const storyCharactersByStoryId = /* GraphQL */ `
  query StoryCharactersByStoryId(
    $storyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoryCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storyCharactersByStoryId(
      storyId: $storyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        storyId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStoryFragmentCharacter = /* GraphQL */ `
  query GetStoryFragmentCharacter($id: ID!) {
    getStoryFragmentCharacter(id: $id) {
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
export const listStoryFragmentCharacters = /* GraphQL */ `
  query ListStoryFragmentCharacters(
    $filter: ModelStoryFragmentCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoryFragmentCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        storyFragmentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const storyFragmentCharactersByCharacterId = /* GraphQL */ `
  query StoryFragmentCharactersByCharacterId(
    $characterId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoryFragmentCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storyFragmentCharactersByCharacterId(
      characterId: $characterId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        storyFragmentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const storyFragmentCharactersByStoryFragmentId = /* GraphQL */ `
  query StoryFragmentCharactersByStoryFragmentId(
    $storyFragmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoryFragmentCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storyFragmentCharactersByStoryFragmentId(
      storyFragmentId: $storyFragmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        storyFragmentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
