import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import DreamForm from '../../common/DreamForm/DreamForm';
import { LoadingComponent } from '../../common';

import { useGetDreamQuery, useUpdateDreamMutation } from './api.generated';

const DreamUpdate: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetDreamQuery({ variables: { id } });
  const updateDreamMutation = useUpdateDreamMutation();

  if (loading) return <LoadingComponent />;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  if (!data || !data.dream) return null;
  return data ? (
    <DreamForm
      dreamData={data.dream}
      mutation={updateDreamMutation}
      updateStatus={true}
    />
  ) : null;
};

export default DreamUpdate;
