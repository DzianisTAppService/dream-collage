import React from 'react';
import { gql } from 'graphql-tag';
import { Query } from 'react-apollo';

import DreamForm from '../components/DreamForm';

const DREAM_QUERY = gql`
  query getDream($id: ID) {
    dream(_id: $id) {
      _id
      name
      time
      rating
    }
  }
`;

const DREAM_MUTATIONS = gql`
  mutation updateDream($id: ID!, $name: String, $time: String, $rating: Int) {
    updateDream(_id: $id, name: $name, time: $time, rating: $rating) {
      _id
      name
      time
      rating
    }
  }
`;

const DreamUpdate: React.FC = (props: any) => {
  return (
    <Query query={DREAM_QUERY} variables={{ id: props.match.params.id }}>
      {({ loading, error, data }: TQuery): null | React.ReactElement => {
        if (loading) return <p>'Loading...'</p>;
        if (error) return <p>{`Error! ${error.message}`}</p>;

        return (
          <DreamForm
            dreamData={data.dream}
            mutation={DREAM_MUTATIONS}
            updateStatus={true}
          />
        );
      }}
    </Query>
  );
};

export default DreamUpdate;

interface TQuery {
  loading: boolean;
  error?: any;
  data: any;
}
