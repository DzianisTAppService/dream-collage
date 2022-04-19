import React, { FC } from 'react';
import { Typography } from '@mui/material';

import Dream from 'common/Dream';
import LoadingComponent from 'common/LoadingComponent';

import { useUpdateDreamMutation } from 'pages/DreamUpdate/api.generated';
import { useDeleteDreamMutation } from './api.generated';
import { Dream as DreamType } from '__generated__/types';

interface Props {
  dream: DreamType;
}

const DreamContainer: FC<Props> = ({ dream }) => {
  const [deleteDream, { loading: loadingDelete, error: errorDelete }] =
    useDeleteDreamMutation();
  const [updateDream, { loading: loadingUpdate, error: errorUpdate }] =
    useUpdateDreamMutation();

  const handleDeleteDream = async () => {
    await deleteDream({
      variables: { id: dream._id },
      refetchQueries: ['DreamsQuery'],
    });
  };

  const handleUpdateDream = async (newData: Omit<DreamType, '_id'>) => {
    await updateDream({
      variables: { ...dream, ...newData, id: dream._id },
      refetchQueries: ['DreamsQuery'],
    });
  };

  if (errorDelete) return <Typography>{errorDelete}</Typography>;
  if (errorUpdate) return <Typography>{errorUpdate}</Typography>;

  return (
    <>
      {(loadingDelete || loadingUpdate) && <LoadingComponent />}
      <Dream
        data={dream}
        deleteDream={handleDeleteDream}
        updateDream={handleUpdateDream}
      />
    </>
  );
};

export default DreamContainer;
