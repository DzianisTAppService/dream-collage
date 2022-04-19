import React, { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { StarRate } from '@mui/icons-material';

import PATHS from 'constants/routes-paths';
import { useNavigate } from 'react-router-dom';

import { StyledRatingBox, StyledStarRate } from './Rating.styles';

interface RatingProps {
  id: string;
  rating: number | null | undefined;
  updateDream: (rating: number) => Promise<void>;
}

interface StarsBlockProps {
  updateRating: (rating: number) => void;
}

const StarsBlock: FC<StarsBlockProps> = ({ updateRating }) => {
  const [hoveredItem, setHoveredItem] = useState<number>(0);

  return (
    <Box>
      {Array.from(new Array(10)).map((_, i) => (
        <StyledStarRate
          key={i}
          fontSize="medium"
          onClick={() => updateRating(++i)}
          onMouseOver={() => setHoveredItem(i)}
          style={i <= hoveredItem ? { color: 'gold' } : {}}
        />
      ))}
    </Box>
  );
};

const Rating: FC<RatingProps> = ({ rating, id, updateDream }) => {
  const navigate = useNavigate();
  const [isStarsVisible, setIsStarVisible] = useState(false);

  const handleDreamUpdate = () => navigate(`${PATHS.dreamUpdate}/${id}`);

  const handleChangeRating = async (rating: number) => {
    await updateDream(rating);
    setIsStarVisible(false);
  };
  return (
    <Box
      position="absolute"
      top={5}
      right={5}
      display="flex"
      alignItems="center"
      bgcolor={'rgba(255, 255, 255, 0.5)'}
      borderRadius="3px"
      color="#af9723"
      {...(rating ? { py: 0.25, px: 0.6 } : {})}
    >
      {rating ? (
        <>
          {isStarsVisible ? (
            <StarsBlock updateRating={handleChangeRating} />
          ) : (
            <StyledRatingBox
              display="flex"
              alignItems="center"
              onClick={() => setIsStarVisible(!isStarsVisible)}
            >
              <Typography variant="h5">{rating}</Typography>
              <StarRate fontSize="large" />
            </StyledRatingBox>
          )}
        </>
      ) : (
        <Button size="small" onClick={handleDreamUpdate} color="inherit">
          Add rating
        </Button>
      )}
    </Box>
  );
};

export default Rating;
