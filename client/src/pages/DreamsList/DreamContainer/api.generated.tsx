import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type DeleteDreamMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type DeleteDreamMutation = {
  __typename?: 'RootMutationType';
  deleteDream?:
    | { __typename?: 'DeleteDream'; deletedCount?: number | null | undefined }
    | null
    | undefined;
};

export const DeleteDreamDocument = gql`
  mutation DeleteDream($id: ID!) {
    deleteDream(_id: $id) {
      deletedCount
    }
  }
`;
export type DeleteDreamMutationFn = Apollo.MutationFunction<
  DeleteDreamMutation,
  DeleteDreamMutationVariables
>;

/**
 * __useDeleteDreamMutation__
 *
 * To run a mutation, you first call `useDeleteDreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDreamMutation, { data, loading, error }] = useDeleteDreamMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDreamMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDreamMutation,
    DeleteDreamMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteDreamMutation, DeleteDreamMutationVariables>(
    DeleteDreamDocument,
    options
  );
}
export type DeleteDreamMutationHookResult = ReturnType<
  typeof useDeleteDreamMutation
>;
export type DeleteDreamMutationResult =
  Apollo.MutationResult<DeleteDreamMutation>;
export type DeleteDreamMutationOptions = Apollo.BaseMutationOptions<
  DeleteDreamMutation,
  DeleteDreamMutationVariables
>;
