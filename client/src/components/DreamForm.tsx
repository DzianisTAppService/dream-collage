import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { LoadingComponent } from '.';

import { Dream as DreamType } from '../__generated__/types';

interface Props {
  dreamData?: DreamType;
  mutation: any;
  updateStatus?: boolean;
}

const DreamForm: FC<Props> = ({
  dreamData = {},
  mutation: [mutation, { loading }],
  updateStatus = false,
}) => {
  const [name, setName] = useState<string>(dreamData.name || '');
  const [rating, setRating] = useState<number>(dreamData.rating || 0);
  const [time, setTime] = useState<string>(dreamData.time || '');
  const { push } = useHistory();

  const handleChangeInputRating = async (event: {
    target: { validity: { valid: any }; value: any };
  }) => {
    const elementRating = event.target.validity.valid
      ? event.target.value
      : rating;

    setRating(+elementRating);
  };

  const handleBackToDreams = () => {
    push('/dreams/list');
  };

  const handleSubmit = async () => {
    const variables = updateStatus
      ? { id: dreamData._id, name, rating, time }
      : { name, rating, time };

    try {
      await mutation({ variables });
      handleBackToDreams();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className="form-group" mx={4}>
      {loading && <LoadingComponent />}
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

      <button onClick={handleSubmit}>
        {updateStatus ? 'Update' : 'Create Dream'}
      </button>

      <button onClick={handleBackToDreams}>Cancel</button>
    </Box>
  );
};

export default DreamForm;
