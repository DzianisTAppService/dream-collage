import React, { FunctionComponent, useState } from 'react';
import { TDream } from './Dream';
import { Mutation } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Box } from '@material-ui/core';

interface OwnProps extends RouteComponentProps {
  dreamData?: TDream;
  mutation: any;
  updateStatus?: boolean;
}

type Props = OwnProps;

const initialState: TDream = {
  name: '',
  rating: null,
  time: '',
};

const DreamForm: FunctionComponent<Props> = (props) => {
  const { dreamData, history, mutation, updateStatus = false } = props;
  const [dreamInfo, setDreamInfo] = useState<TDream>(dreamData || initialState);

  const { rating, name, time, _id: id } = dreamInfo;

  const handleChangeInputName = (event: { target: { value: any } }) => {
    const name = event.target.value;
    setDreamInfo({ ...dreamInfo, name });
  };

  const handleChangeInputRating = async (event: {
    target: { validity: { valid: any }; value: any };
  }) => {
    const elementRating = event.target.validity.valid
      ? event.target.value
      : rating;

    setDreamInfo({ ...dreamInfo, rating: +elementRating });
  };

  const handleChangeInputTime = async (event: { target: { value: any } }) => {
    const time = event.target.value;
    setDreamInfo({ ...dreamInfo, time });
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
              onChange={handleChangeInputName}
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
              onChange={handleChangeInputTime}
            />
          </Box>

          {updateStatus ? (
            <button
              onClick={() => {
                updateDream({ variables: { id, name, rating, time } });
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
