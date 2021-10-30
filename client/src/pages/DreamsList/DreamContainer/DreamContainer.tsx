import React, { FC } from 'react';

import { Dream as DreamType } from '../../../__generated__/types';
import { useDeleteDreamMutation } from './api.generated';
import { Dream, LoadingComponent } from '../../../components';
import { Typography } from '@material-ui/core';

interface Props {
  dream: DreamType;
}

const DreamContainer: FC<Props> = ({ dream }) => {
  const [deleteDream, { loading, data, error }] = useDeleteDreamMutation();

  const handleDeleteDream = async () => {
    await deleteDream({ variables: { id: dream._id } });
    // window.location.reload();
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
