import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import LoadingComponent from 'common/LoadingComponent';
import NameField from './NameField';
import PATHS from 'constants/routes-paths';

import { Dream as DreamType } from '__generated__/types';
import RatingField from './RatingField';
import TimeField from './TimeField';

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
    name: name || '',
    rating: rating || 0,
    time: time || '',
  };

  const methods = useForm<FormData>({ defaultValues });
  const { register, handleSubmit } = methods;

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
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box width={500} p={3} border="1px solid grey" borderRadius={5}>
                  <Grid container direction="column">
                    <Grid item>
                      <NameField />
                    </Grid>

                    <Grid item>
                      <RatingField />
                    </Grid>

                    <Grid item>
                      <TimeField />
                    </Grid>

                    <Box my={3}>
                      <Divider />
                    </Box>

                    <button type="submit">
                      {updateStatus ? 'Update' : 'Create Dream'}
                    </button>

                    <button onClick={handleBackToDreams}>Cancel</button>
                  </Grid>
                </Box>
              </form>
            </FormProvider>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DreamForm;
