import React from 'react';

import DreamForm from 'common/DreamForm/DreamForm';
import { useCreateDreamMutation } from './api.generated';

const DreamCreate: React.FC = () => {
  const createDreamMutation = useCreateDreamMutation();

  return <DreamForm mutation={createDreamMutation} />;
};

export default DreamCreate;
