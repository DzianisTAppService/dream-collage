import React from 'react';
import { gql } from 'graphql-tag';

import DreamForm from '../components/DreamForm';

const DREAM_MUTATIONS = gql`
  mutation createDream($name: String, $time: String, $rating: Int) {
    createDream(name: $name, time: $time, rating: $rating) {
      _id
      name
      time
      rating
    }
  }
`;

const DreamCreate: React.FC = () => <DreamForm mutation={DREAM_MUTATIONS} />;

export default DreamCreate;
