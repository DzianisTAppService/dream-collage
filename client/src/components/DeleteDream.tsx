import React from 'react';
import { TUpdateDeleteDream } from './UpdateDream';
import { Button } from '@material-ui/core';
import { gql } from 'graphql-tag';

const DREAM_MUTATIONS = gql`
  mutation updateDream($id: ID!) {
    deleteDream(_id: $id) {
      name
      time
      rating
    }
  }
`;

const DeleteDream: React.FC<TUpdateDeleteDream> = ({ id }) => {
  const handleBackToDreams = () => {
    window.location.reload();
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      style={{ marginLeft: '15px' }}
      onClick={() => {
        // deleteDream({ variables: { id } });
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteDream;
