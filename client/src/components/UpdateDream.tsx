import React, { FC } from 'react';
import { Button } from '@material-ui/core';

interface Props {
  id: string;
}

const UpdateDream: FC<Props> = (props) => {
  const updateUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    window.location.href = `http://localhost:8000/dream/update/${props.id}`;
  };
  return (
    <Button variant="contained" color="primary" onClick={updateUser}>
      Update
    </Button>
  );
};

export default UpdateDream;
