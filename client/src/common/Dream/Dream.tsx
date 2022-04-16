import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { StarRate } from '@mui/icons-material';

import defaultPicture from 'assets/images/flat.jpg';
import PATHS from 'constants/routes-paths';

import { Dream as DreamType } from '__generated__/types';

interface Props {
  data: DreamType;
  deleteDream: () => void;
}

const Dream: FC<Props> = ({ data, data: { _id: id, image }, deleteDream }) => {
  const navigate = useNavigate();

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
            <Box pr={2}>
              <Typography>{data.time}</Typography>
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
                <Typography variant="h5">{data.rating}</Typography>
                <StarRate fontSize="large" />
              </Box>
            </Box>
          </Box>
          <Box pt={2} pr={2} pb={2} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`${PATHS.dreamUpdate}/${id}`)}
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
