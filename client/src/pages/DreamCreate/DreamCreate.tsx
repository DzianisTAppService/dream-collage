import React from 'react';

import DreamForm from '../../components/DreamForm';
import { useCreateDreamMutation } from '../../generated/graphql';

const DreamCreate: React.FC = () => {
  const createDreamMutation = useCreateDreamMutation();

  return <DreamForm mutation={createDreamMutation} />;
};

export default DreamCreate;
