import React, { FC, useState } from 'react';
import { Dream as DreamType } from '../generated/graphql';
import { Mutation } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Box } from '@material-ui/core';

interface OwnProps extends RouteComponentProps {
  dreamData?: DreamType;
  mutation: any;
  updateStatus?: boolean;
}

type Props = OwnProps;

const DreamForm: FC<Props> = ({
  dreamData = {},
  history,
  mutation,
  updateStatus = false,
}) => {
  const [name, setName] = useState<string>(dreamData.name || '');
  const [rating, setRating] = useState<number>(dreamData.rating || 0);
  const [time, setTime] = useState<string>(dreamData.time || '');

  const handleChangeInputRating = async (event: {
    target: { validity: { valid: any }; value: any };
  }) => {
    const elementRating = event.target.validity.valid
      ? event.target.value
      : rating;

    setRating(+elementRating);
  };

  const handleBackToDreams = async () => {
    history.push('/dreams/list');
  };

  return (
    <Mutation mutation={mutation} onCompleted={handleBackToDreams}>
      {(updateDream: any): null | React.ReactElement => (
        <Box className="form-group" mx={4}>
          <h1 className="h1">Create Dream</h1>

          <Box>
            <label>Name: </label>
            <input
              className="form-control"
              type="text"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <Box>
            <label>Rating: </label>
            <input
              className="form-control"
              type="number"
              step="0.1"
              lang="en-US"
              min="0"
              max="10"
              pattern="[0-9]+([,\.][0-9]+)?"
              value={rating || ''}
              onChange={handleChangeInputRating}
            />
          </Box>

          <Box>
            <label>Time: </label>
            <input
              className="form-control"
              type="text"
              value={time || ''}
              onChange={(e) => setTime(e.target.value)}
            />
          </Box>

          {updateStatus ? (
            <button
              onClick={() => {
                updateDream({
                  variables: { id: dreamData._id, name, rating, time },
                });
              }}
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => {
                updateDream({ variables: { name, rating, time } });
              }}
            >
              Create Dream
            </button>
          )}

          <button onClick={handleBackToDreams}>Cancel</button>
        </Box>
      )}
    </Mutation>
  );
};

export default withRouter(DreamForm);
