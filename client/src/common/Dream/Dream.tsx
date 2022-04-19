import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import {
  Card,
  Grid,
  CardMedia,
  CardHeader,
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';

import defaultPicture from 'assets/images/flat.jpg';
import PATHS from 'constants/routes-paths';
import Rating from 'common/Rating';

import { Dream as DreamType } from '__generated__/types';

interface Props {
  data: DreamType;
  deleteDream: () => void;
  updateDream: (data: Omit<DreamType, '_id'>) => Promise<void>;
}

const Dream: FC<Props> = ({
  data,
  data: { _id: id, image },
  deleteDream,
  updateDream,
}) => {
  const navigate = useNavigate();

  const handleDreamUpdate = () => navigate(`${PATHS.dreamUpdate}/${id}`);
  const handleRatingUpdate = async (rating: number) => {
    await updateDream({ name: data.name, rating });
  };

  return (
    <Grid item xs={6}>
      <Paper elevation={2}>
        <Card>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardHeader title={data.name} />
            <Box pr={2} color={data.time ? 'inherit' : '#a8a8a8'}>
              {data.time ? (
                <Typography>
                  {moment(data.time).format('MM-DD-YYYY')}
                </Typography>
              ) : (
                <Button
                  onClick={handleDreamUpdate}
                  color="inherit"
                  variant="outlined"
                  size="small"
                >
                  Add date
                </Button>
              )}
            </Box>
          </Box>

          <Box px={2}>
            <Box
              position="relative"
              width="100%"
              height="200px"
              borderRadius="3px"
            >
              <CardMedia
                image={image || defaultPicture}
                title={data.name}
                style={{ height: '100%' }}
              />
              <Rating
                rating={data.rating}
                id={id}
                updateDream={handleRatingUpdate}
              />
            </Box>
          </Box>
          <Box pt={2} pr={2} pb={2} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleDreamUpdate}
            >
              Update
            </Button>
            <Box ml={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={deleteDream}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Card>
      </Paper>
    </Grid>
  );
};

export default Dream;
