import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Divider, Grid, Typography } from '@mui/material';
import * as yup from 'yup';

import LoadingComponent from 'common/LoadingComponent';
import NameField from './NameField';
import PATHS from 'constants/routes-paths';
import RatingField from './RatingField';
import DateField from './DateField';
import { useYupValidationResolver } from 'utils/hooks';

import { StyledButton } from './DreamForm.styles';

import { Dream as DreamType } from '__generated__/types';

interface Props {
  dreamData?: DreamType;
  mutation: any;
  updateStatus?: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  rating: yup.number().required('Name is required').positive().integer(),
  time: yup.date().required('Name is required'),
}) as yup.Schema<{}>;

const DreamForm: FC<Props> = ({
  dreamData: { name, rating, time, _id: id } = {},
  mutation: [mutation, { loading }],
  updateStatus = false,
}) => {
  const navigate = useNavigate();

  const defaultValues = {
    name: name || '',
    rating: rating || '',
    time: time || null,
  };

  const resolver = useYupValidationResolver(schema);
  const methods = useForm({ defaultValues, resolver });
  const { handleSubmit } = methods;

  const handleBackToDreams = () => navigate(PATHS.dreams);

  const onSubmit = async ({
    name,
    rating,
    time,
  }: {
    name: string;
    rating: string | number;
    time: string | null;
  }) => {
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

          <Box mt={4} display="flex" justifyContent="center">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box width={500} p={3} border="1px solid grey" borderRadius={5}>
                  <Grid container direction="column">
                    <Grid item>
                      <NameField />
                    </Grid>

                    <Grid item>
                      <Box mt={3}>
                        <RatingField />
                      </Box>
                    </Grid>

                    <Grid item>
                      <Box mt={3}>
                        <DateField />
                      </Box>
                    </Grid>

                    <Box my={3}>
                      <Divider />
                    </Box>

                    <Grid item container justifyContent="space-between">
                      <Box mr={2}>
                        <StyledButton
                          onClick={handleSubmit(onSubmit)}
                          variant="contained"
                        >
                          {updateStatus ? 'Update' : 'Create Dream'}
                        </StyledButton>
                      </Box>

                      <StyledButton
                        onClick={handleBackToDreams}
                        variant="outlined"
                      >
                        Cancel
                      </StyledButton>
                    </Grid>
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
