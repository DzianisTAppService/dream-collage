import styled from 'styled-components';
import { StarRate } from '@mui/icons-material';
import { Box } from '@mui/material';

export const StyledStarRate = styled(StarRate)`
  cursor: pointer;
  color: gray;
  transition: 0.3s;
  &:hover {
    color: gold;
  }
`;

export const StyledRatingBox = styled(Box)`
  cursor: pointer;
`;
