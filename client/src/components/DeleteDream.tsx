import React from 'react';
import { TUpdateDeleteDream } from './UpdateDream';
import { Mutation, useApolloClient } from 'react-apollo';
import { Button } from '@material-ui/core';
import { gql } from 'graphql-tag';
import { ApolloClient } from '@apollo/client';

const DREAM_MUTATIONS = gql`
  mutation updateDream($id: ID!) {
    deleteDream(_id: $id) {
      name
      time
      rating
    }
  }
`;

const DeleteDream: React.FC<TUpdateDeleteDream> = (props) => {
  const { id } = props;
  // @ts-ignore
  const client: ApolloClient<any> = useApolloClient();

  const handleBackToDreams = () => {
    console.log(client);
    debugger;
    window.location.reload();
  };

  return (
    <Mutation mutation={DREAM_MUTATIONS} onCompleted={handleBackToDreams}>
      {(deleteDream: any): null | React.ReactElement => (
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: '15px' }}
          onClick={() => {
            deleteDream({ variables: { id } });
          }}
        >
          Delete
        </Button>
      )}
    </Mutation>
  );
};

export default DeleteDream;
