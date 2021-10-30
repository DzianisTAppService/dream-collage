import * as Types from '../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type GetDreamQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['ID']>;
}>;

export type GetDreamQuery = {
  __typename?: 'RootQueryType';
  dream?:
    | {
        __typename?: 'Dream';
        _id: string;
        name: string;
        time?: string | null | undefined;
        rating?: number | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateDreamMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  name?: Types.Maybe<Types.Scalars['String']>;
  time?: Types.Maybe<Types.Scalars['String']>;
  rating?: Types.Maybe<Types.Scalars['Int']>;
}>;

export type UpdateDreamMutation = {
  __typename?: 'RootMutationType';
  updateDream?:
    | {
        __typename?: 'Dream';
        _id: string;
        name: string;
        time?: string | null | undefined;
        rating?: number | null | undefined;
      }
    | null
    | undefined;
};

export const GetDreamDocument = gql`
  query GetDream($id: ID) {
    dream(_id: $id) {
      _id
      name
      time
      rating
    }
  }
`;

/**
 * __useGetDreamQuery__
 *
 * To run a query within a React component, call `useGetDreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDreamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDreamQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDreamQuery, GetDreamQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDreamQuery, GetDreamQueryVariables>(
    GetDreamDocument,
    options
  );
}
export function useGetDreamLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDreamQuery,
    GetDreamQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDreamQuery, GetDreamQueryVariables>(
    GetDreamDocument,
    options
  );
}
export type GetDreamQueryHookResult = ReturnType<typeof useGetDreamQuery>;
export type GetDreamLazyQueryHookResult = ReturnType<
  typeof useGetDreamLazyQuery
>;
export type GetDreamQueryResult = Apollo.QueryResult<
  GetDreamQuery,
  GetDreamQueryVariables
>;
export const UpdateDreamDocument = gql`
  mutation UpdateDream($id: ID!, $name: String, $time: String, $rating: Int) {
    updateDream(_id: $id, name: $name, time: $time, rating: $rating) {
      _id
      name
      time
      rating
    }
  }
`;
export type UpdateDreamMutationFn = Apollo.MutationFunction<
  UpdateDreamMutation,
  UpdateDreamMutationVariables
>;

/**
 * __useUpdateDreamMutation__
 *
 * To run a mutation, you first call `useUpdateDreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDreamMutation, { data, loading, error }] = useUpdateDreamMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      time: // value for 'time'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useUpdateDreamMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateDreamMutation,
    UpdateDreamMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateDreamMutation, UpdateDreamMutationVariables>(
    UpdateDreamDocument,
    options
  );
}
export type UpdateDreamMutationHookResult = ReturnType<
  typeof useUpdateDreamMutation
>;
export type UpdateDreamMutationResult =
  Apollo.MutationResult<UpdateDreamMutation>;
export type UpdateDreamMutationOptions = Apollo.BaseMutationOptions<
  UpdateDreamMutation,
  UpdateDreamMutationVariables
>;
