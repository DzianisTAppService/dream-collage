import React, { FC } from 'react';
import { Typography } from '@mui/material';

import Dream from 'common/Dream';
import LoadingComponent from 'common/LoadingComponent';

import { useDeleteDreamMutation } from './api.generated';
import { Dream as DreamType } from '__generated__/types';

interface Props {
  dream: DreamType;
}

const DreamContainer: FC<Props> = ({ dream }) => {
  const [deleteDream, { loading, error }] = useDeleteDreamMutation();

  const handleDeleteDream = async () => {
    await deleteDream({
      variables: { id: dream._id },
      refetchQueries: ['DreamsQuery'],
    });
  };

  if (error) return <Typography>{error}</Typography>;

  return (
    <>
      {loading && <LoadingComponent />}
      <Dream data={dream} deleteDream={handleDeleteDream} />
    </>
  );
};

export default DreamContainer;
