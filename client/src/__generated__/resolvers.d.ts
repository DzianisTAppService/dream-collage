import { GraphQLResolveInfo } from 'graphql';
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
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
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

export type ResolverTypeWrapper<T> = Promise<DeepPartial<T>> | DeepPartial<T>;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DeleteDream: ResolverTypeWrapper<DeleteDream>;
  Dream: ResolverTypeWrapper<Dream>;
  DreamImageInputType: DreamImageInputType;
  DreamImageType: ResolverTypeWrapper<DreamImageType>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  RootMutationType: ResolverTypeWrapper<{}>;
  RootQueryType: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  DeleteDream: DeleteDream;
  Dream: Dream;
  DreamImageInputType: DreamImageInputType;
  DreamImageType: DreamImageType;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  RootMutationType: {};
  RootQueryType: {};
  String: Scalars['String'];
};

export type DeleteDreamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeleteDream'] = ResolversParentTypes['DeleteDream']
> = {
  deletedCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DreamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Dream'] = ResolversParentTypes['Dream']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes['DreamImageType']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DreamImageTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DreamImageType'] = ResolversParentTypes['DreamImageType']
> = {
  contentType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  dataURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootMutationTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RootMutationType'] = ResolversParentTypes['RootMutationType']
> = {
  createDream?: Resolver<
    Maybe<ResolversTypes['Dream']>,
    ParentType,
    ContextType,
    RequireFields<RootMutationTypecreateDreamArgs, 'name'>
  >;
  deleteDream?: Resolver<
    Maybe<ResolversTypes['DeleteDream']>,
    ParentType,
    ContextType,
    RequireFields<RootMutationTypedeleteDreamArgs, never>
  >;
  updateDream?: Resolver<
    Maybe<ResolversTypes['Dream']>,
    ParentType,
    ContextType,
    RequireFields<RootMutationTypeupdateDreamArgs, '_id' | 'name'>
  >;
};

export type RootQueryTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']
> = {
  dream?: Resolver<
    Maybe<ResolversTypes['Dream']>,
    ParentType,
    ContextType,
    RequireFields<RootQueryTypedreamArgs, never>
  >;
  dreams?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Dream']>>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  DeleteDream?: DeleteDreamResolvers<ContextType>;
  Dream?: DreamResolvers<ContextType>;
  DreamImageType?: DreamImageTypeResolvers<ContextType>;
  RootMutationType?: RootMutationTypeResolvers<ContextType>;
  RootQueryType?: RootQueryTypeResolvers<ContextType>;
};
