import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type DreamsQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type DreamsQueryQuery = {
  __typename?: 'RootQueryType';
  dreams?:
    | Array<
        | {
            __typename?: 'Dream';
            _id: string;
            name: string;
            time?: string | null | undefined;
            rating?: number | null | undefined;
            image?:
              | {
                  __typename?: 'DreamImageType';
                  dataURL?: string | null | undefined;
                  contentType?: string | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const DreamsQueryDocument = gql`
  query DreamsQuery {
    dreams {
      _id
      name
      time
      rating
      image {
        dataURL
        contentType
      }
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
export function useDreamsQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DreamsQueryQuery,
    DreamsQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DreamsQueryQuery, DreamsQueryQueryVariables>(
    DreamsQueryDocument,
    options
  );
}
export function useDreamsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DreamsQueryQuery,
    DreamsQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DreamsQueryQuery, DreamsQueryQueryVariables>(
    DreamsQueryDocument,
    options
  );
}
export type DreamsQueryQueryHookResult = ReturnType<typeof useDreamsQueryQuery>;
export type DreamsQueryLazyQueryHookResult = ReturnType<
  typeof useDreamsQueryLazyQuery
>;
export type DreamsQueryQueryResult = Apollo.QueryResult<
  DreamsQueryQuery,
  DreamsQueryQueryVariables
>;
