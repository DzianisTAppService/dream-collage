import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { LoadingComponent } from '..';
import PATHS from 'constants/routes-paths';

import { Dream as DreamType } from '../../__generated__/types';

interface Props {
  dreamData?: DreamType;
  mutation: any;
  updateStatus?: boolean;
}

interface FormData {
  name: string;
  rating: number;
  time: string;
}

const DreamForm: FC<Props> = ({
  dreamData: { name, rating, time, _id: id } = {},
  mutation: [mutation, { loading }],
  updateStatus = false,
}) => {
  const navigate = useNavigate();

  const defaultValues = {
    name: name,
    rating: rating || 0,
    time: time || '',
  };

  const { register, handleSubmit } = useForm<FormData>({ defaultValues });

  const handleBackToDreams = () => navigate(PATHS.dreams);

  const onSubmit: SubmitHandler<FormData> = async ({ name, rating, time }) => {
    const dreamData = { name, rating: +rating, time };
    try {
      await mutation({
        variables: updateStatus ? { id, ...dreamData } : dreamData,
      });
      handleBackToDreams();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mx={4} p={5}>
          {loading && <LoadingComponent />}
          <Typography variant="h4" align="center">
            Create Dream
          </Typography>

          <Box mt={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <label>Name: </label>
                <input type="text" {...register('name')} />
              </Box>

              <Box>
                <label>Rating: </label>
                <input
                  type="number"
                  step="1"
                  lang="en-US"
                  min="0"
                  max="10"
                  pattern="[0-9]+([,\.][0-9]+)?"
                  {...register('rating')}
                />
              </Box>

              <Box>
                <label>Time: </label>
                <input type="text" {...register('time')} />
              </Box>

              <button type="submit">
                {updateStatus ? 'Update' : 'Create Dream'}
              </button>

              <button onClick={handleBackToDreams}>Cancel</button>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DreamForm;
