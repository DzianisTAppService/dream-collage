import React, { FC } from 'react';
import {
  Card,
  Grid,
  makeStyles,
  CardMedia,
  CardHeader,
  CardContent,
  Icon,
  Paper,
} from '@material-ui/core';

import { UpdateDream, DeleteDream } from './index';
import defaultPicture from '../assets/images/flat.jpg';
import { Dream as DreamType } from '../generated/graphql';

const useStyles = makeStyles({
  wrapper: {
    minHeight: '350px',
  },
  content: {
    paddingTop: 0,
  },
  mediaWrapper: {
    position: 'relative',
  },
  media: {
    width: '100%',
    height: '200px',
    borderRadius: '3px',
  },
  rating: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '2px 5px',
    borderRadius: '3px',
    fontWeight: 600,
    color: '#af9723',
  },
  icon: {
    marginLeft: '10px',
    color: '#af9723',
  },
  date: {
    paddingRight: '16px',
  },
  footer: {
    paddingTop: '16px',
    paddingRight: '16px',
    paddingBottom: '16px',
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
        <Card className={classes.wrapper}>
          <Grid container justify="space-between" alignItems="center">
            <CardHeader title={dream.name} />
            <span className={classes.date}>{dream.time}</span>
          </Grid>

          <CardContent className={classes.content}>
            <div className={classes.mediaWrapper}>
              <CardMedia
                className={classes.media}
                image={image || defaultPicture}
                title={dream.name}
              />
              <div className={classes.rating}>
                {dream.rating}
                <Icon className={classes.icon}>star</Icon>
              </div>
            </div>
          </CardContent>
          <Grid container justify="flex-end" className={classes.footer}>
            <UpdateDream id={id} />
            <DeleteDream id={id} />
          </Grid>
        </Card>
      </Paper>
    </Grid>
  );
};

export default Dream;
