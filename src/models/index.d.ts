import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Character, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly authorID: string;
  readonly storys?: (StoryCharacter | null)[] | null;
  readonly storyfragments?: (StoryFragmentCharacter | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Character, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly authorID: string;
  readonly storys: AsyncCollection<StoryCharacter>;
  readonly storyfragments: AsyncCollection<StoryFragmentCharacter>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Character = LazyLoading extends LazyLoadingDisabled ? EagerCharacter : LazyCharacter

export declare const Character: (new (init: ModelInit<Character>) => Character) & {
  copyOf(source: Character, mutator: (draft: MutableModel<Character>) => MutableModel<Character> | void): Character;
}

type EagerAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly StoryFragments?: (StoryFragment | null)[] | null;
  readonly Characters?: (Character | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly StoryFragments: AsyncCollection<StoryFragment>;
  readonly Characters: AsyncCollection<Character>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Author = LazyLoading extends LazyLoadingDisabled ? EagerAuthor : LazyAuthor

export declare const Author: (new (init: ModelInit<Author>) => Author) & {
  copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

type EagerStoryFragment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoryFragment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly storyID: string;
  readonly prompt?: string | null;
  readonly fragment: string;
  readonly prevId?: string | null;
  readonly createdAt: string;
  readonly authorID: string;
  readonly Characters?: (StoryFragmentCharacter | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyStoryFragment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoryFragment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly storyID: string;
  readonly prompt?: string | null;
  readonly fragment: string;
  readonly prevId?: string | null;
  readonly createdAt: string;
  readonly authorID: string;
  readonly Characters: AsyncCollection<StoryFragmentCharacter>;
  readonly updatedAt?: string | null;
}

export declare type StoryFragment = LazyLoading extends LazyLoadingDisabled ? EagerStoryFragment : LazyStoryFragment

export declare const StoryFragment: (new (init: ModelInit<StoryFragment>) => StoryFragment) & {
  copyOf(source: StoryFragment, mutator: (draft: MutableModel<StoryFragment>) => MutableModel<StoryFragment> | void): StoryFragment;
}

type EagerStory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Story, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly currentMessageId: string;
  readonly storyRootId: string;
  readonly StoryFragments?: (StoryFragment | null)[] | null;
  readonly prevStoryId?: string | null;
  readonly createdAt: string;
  readonly lastAddedToAt: string;
  readonly Author: Author;
  readonly Characters?: (StoryCharacter | null)[] | null;
  readonly updatedAt?: string | null;
  readonly storyAuthorId: string;
}

type LazyStory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Story, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly currentMessageId: string;
  readonly storyRootId: string;
  readonly StoryFragments: AsyncCollection<StoryFragment>;
  readonly prevStoryId?: string | null;
  readonly createdAt: string;
  readonly lastAddedToAt: string;
  readonly Author: AsyncItem<Author>;
  readonly Characters: AsyncCollection<StoryCharacter>;
  readonly updatedAt?: string | null;
  readonly storyAuthorId: string;
}

export declare type Story = LazyLoading extends LazyLoadingDisabled ? EagerStory : LazyStory

export declare const Story: (new (init: ModelInit<Story>) => Story) & {
  copyOf(source: Story, mutator: (draft: MutableModel<Story>) => MutableModel<Story> | void): Story;
}

type EagerStoryCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoryCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly characterId?: string | null;
  readonly storyId?: string | null;
  readonly character: Character;
  readonly story: Story;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStoryCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoryCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly characterId?: string | null;
  readonly storyId?: string | null;
  readonly character: AsyncItem<Character>;
  readonly story: AsyncItem<Story>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StoryCharacter = LazyLoading extends LazyLoadingDisabled ? EagerStoryCharacter : LazyStoryCharacter

export declare const StoryCharacter: (new (init: ModelInit<StoryCharacter>) => StoryCharacter) & {
  copyOf(source: StoryCharacter, mutator: (draft: MutableModel<StoryCharacter>) => MutableModel<StoryCharacter> | void): StoryCharacter;
}

type EagerStoryFragmentCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoryFragmentCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly characterId?: string | null;
  readonly storyFragmentId?: string | null;
  readonly character: Character;
  readonly storyFragment: StoryFragment;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStoryFragmentCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoryFragmentCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly characterId?: string | null;
  readonly storyFragmentId?: string | null;
  readonly character: AsyncItem<Character>;
  readonly storyFragment: AsyncItem<StoryFragment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StoryFragmentCharacter = LazyLoading extends LazyLoadingDisabled ? EagerStoryFragmentCharacter : LazyStoryFragmentCharacter

export declare const StoryFragmentCharacter: (new (init: ModelInit<StoryFragmentCharacter>) => StoryFragmentCharacter) & {
  copyOf(source: StoryFragmentCharacter, mutator: (draft: MutableModel<StoryFragmentCharacter>) => MutableModel<StoryFragmentCharacter> | void): StoryFragmentCharacter;
}