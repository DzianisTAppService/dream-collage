import * as Types from '../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type CreateDreamMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  time?: Types.Maybe<Types.Scalars['String']>;
  rating?: Types.Maybe<Types.Scalars['Int']>;
}>;

export type CreateDreamMutation = {
  __typename?: 'RootMutationType';
  createDream?:
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

export const CreateDreamDocument = gql`
  mutation CreateDream($name: String!, $time: String, $rating: Int) {
    createDream(name: $name, time: $time, rating: $rating) {
      _id
      name
      time
      rating
    }
  }
`;
export type CreateDreamMutationFn = Apollo.MutationFunction<
  CreateDreamMutation,
  CreateDreamMutationVariables
>;

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
export function useCreateDreamMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDreamMutation,
    CreateDreamMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateDreamMutation, CreateDreamMutationVariables>(
    CreateDreamDocument,
    options
  );
}
export type CreateDreamMutationHookResult = ReturnType<
  typeof useCreateDreamMutation
>;
export type CreateDreamMutationResult =
  Apollo.MutationResult<CreateDreamMutation>;
export type CreateDreamMutationOptions = Apollo.BaseMutationOptions<
  CreateDreamMutation,
  CreateDreamMutationVariables
>;
