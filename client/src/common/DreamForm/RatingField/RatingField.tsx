import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormHelperText, TextField } from '@mui/material';

const RatingField: FC = () => {
  const {
    control,
    formState: { errors = {} },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="rating"
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl fullWidth>
            <TextField
              type="number"
              id="rating"
              label="Rating"
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]+([,\\.][0-9]+)?',
                min: 0,
                max: 10,
              }}
              value={value || ''}
              onChange={onChange}
              error={Boolean(errors.rating?.message)}
            />
            <FormHelperText error>{errors.rating?.message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default RatingField;
