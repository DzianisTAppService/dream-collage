export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DeleteDream = {
  __typename?: 'DeleteDream';
  deletedCount?: Maybe<Scalars['Int']>;
};

export type Dream = {
  __typename?: 'Dream';
  _id: Scalars['ID'];
  image?: Maybe<DreamImageType>;
  name: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['String']>;
};

export type DreamImageInputType = {
  contentType?: Maybe<Scalars['String']>;
  dataURL?: Maybe<Scalars['String']>;
};

export type DreamImageType = {
  __typename?: 'DreamImageType';
  contentType?: Maybe<Scalars['String']>;
  dataURL?: Maybe<Scalars['String']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  createDream?: Maybe<Dream>;
  deleteDream?: Maybe<DeleteDream>;
  updateDream?: Maybe<Dream>;
};

export type RootMutationTypecreateDreamArgs = {
  image?: Maybe<DreamImageInputType>;
  name: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['String']>;
};

export type RootMutationTypedeleteDreamArgs = {
  _id?: Maybe<Scalars['ID']>;
};

export type RootMutationTypeupdateDreamArgs = {
  _id: Scalars['ID'];
  image?: Maybe<DreamImageInputType>;
  name: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  dream?: Maybe<Dream>;
  dreams?: Maybe<Array<Maybe<Dream>>>;
};

export type RootQueryTypedreamArgs = {
  _id?: Maybe<Scalars['ID']>;
};
