import React, { FC } from 'react';
import {
  Card,
  Grid,
  makeStyles,
  CardMedia,
  CardHeader,
  Paper,
  Box,
  Typography,
} from '@material-ui/core';
import { StarRate } from '@material-ui/icons';

import { UpdateDream, DeleteDream } from './index';
import defaultPicture from '../assets/images/flat.jpg';

import { Dream as DreamType } from '../generated/graphql';

const useStyles = makeStyles({
  media: {
    width: '100%',
    height: '200px',
    borderRadius: '3px',
  },
});

interface Props {
  dream: DreamType;
}

const Dream: FC<Props> = ({ dream, dream: { _id: id, image } }) => {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Paper elevation={2}>
        <Card>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardHeader title={dream.name} />
            <Box pr={2}>
              <Typography>{dream.time}</Typography>
            </Box>
          </Box>

          <Box px={2}>
            <Box position="relative">
              <CardMedia
                className={classes.media}
                image={image || defaultPicture}
                title={dream.name}
              />
              <Box
                position="absolute"
                top={5}
                right={5}
                display="flex"
                alignItems="center"
                py={0.25}
                px={0.6}
                bgcolor={'rgba(255, 255, 255, 0.5)'}
                borderRadius="3px"
                color="#af9723"
              >
                <Typography variant="h5">{dream.rating}</Typography>
                <StarRate fontSize="large" />
              </Box>
            </Box>
          </Box>
          <Box pt={2} pr={2} pb={2} display="flex" justifyContent="flex-end">
            <UpdateDream id={id} />
            <DeleteDream id={id} />
          </Box>
        </Card>
      </Paper>
    </Grid>
  );
};

export default Dream;
