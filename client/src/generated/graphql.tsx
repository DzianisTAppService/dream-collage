import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dream = {
  __typename?: 'Dream';
  _id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['String']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  createDream?: Maybe<Dream>;
  deleteDream?: Maybe<Dream>;
  updateDream?: Maybe<Dream>;
};


export type RootMutationTypeCreateDreamArgs = {
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['String']>;
};


export type RootMutationTypeDeleteDreamArgs = {
  _id?: Maybe<Scalars['ID']>;
};


export type RootMutationTypeUpdateDreamArgs = {
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  dream?: Maybe<Dream>;
  dreams?: Maybe<Array<Maybe<Dream>>>;
};


export type RootQueryTypeDreamArgs = {
  _id?: Maybe<Scalars['ID']>;
};

export type CreateDreamMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
}>;


export type CreateDreamMutation = { __typename?: 'RootMutationType', createDream?: { __typename?: 'Dream', _id: string, name: string, time?: string | null | undefined, rating?: number | null | undefined } | null | undefined };

export type DreamsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DreamsQueryQuery = { __typename?: 'RootQueryType', dreams?: Array<{ __typename?: 'Dream', _id: string, name: string, time?: string | null | undefined, rating?: number | null | undefined, image?: string | null | undefined } | null | undefined> | null | undefined };


export const CreateDreamDocument = gql`
    mutation createDream($name: String, $time: String, $rating: Int) {
  createDream(name: $name, time: $time, rating: $rating) {
    _id
    name
    time
    rating
  }
}
    `;
export type CreateDreamMutationFn = Apollo.MutationFunction<CreateDreamMutation, CreateDreamMutationVariables>;

/**
 * __useCreateDreamMutation__
 *
 * To run a mutation, you first call `useCreateDreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDreamMutation, { data, loading, error }] = useCreateDreamMutation({
 *   variables: {
 *      name: // value for 'name'
 *      time: // value for 'time'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useCreateDreamMutation(baseOptions?: Apollo.MutationHookOptions<CreateDreamMutation, CreateDreamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDreamMutation, CreateDreamMutationVariables>(CreateDreamDocument, options);
      }
export type CreateDreamMutationHookResult = ReturnType<typeof useCreateDreamMutation>;
export type CreateDreamMutationResult = Apollo.MutationResult<CreateDreamMutation>;
export type CreateDreamMutationOptions = Apollo.BaseMutationOptions<CreateDreamMutation, CreateDreamMutationVariables>;
export const DreamsQueryDocument = gql`
    query DreamsQuery {
  dreams {
    _id
    name
    time
    rating
    image
  }
}
    `;

/**
 * __useDreamsQueryQuery__
 *
 * To run a query within a React component, call `useDreamsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDreamsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDreamsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useDreamsQueryQuery(baseOptions?: Apollo.QueryHookOptions<DreamsQueryQuery, DreamsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DreamsQueryQuery, DreamsQueryQueryVariables>(DreamsQueryDocument, options);
      }
export function useDreamsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DreamsQueryQuery, DreamsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DreamsQueryQuery, DreamsQueryQueryVariables>(DreamsQueryDocument, options);
        }
export type DreamsQueryQueryHookResult = ReturnType<typeof useDreamsQueryQuery>;
export type DreamsQueryLazyQueryHookResult = ReturnType<typeof useDreamsQueryLazyQuery>;
export type DreamsQueryQueryResult = Apollo.QueryResult<DreamsQueryQuery, DreamsQueryQueryVariables>;