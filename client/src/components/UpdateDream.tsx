import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

interface Props {
  id: string;
}

const UpdateDream: FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate(`/dream/update/${props.id}`)}
    >
      Update
    </Button>
  );
};

export default UpdateDream;
