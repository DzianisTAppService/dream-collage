import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

interface Props {
  id: string;
}

const UpdateDream: FC<Props> = (props) => {
  const { push } = useHistory();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => push(`/dream/update/${props.id}`)}
    >
      Update
    </Button>
  );
};

export default UpdateDream;
