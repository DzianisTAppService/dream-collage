import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

const RatingField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="rating"
      defaultValue=""
      render={({ field: { onChange, value } }) => (
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
            value={value}
            onChange={onChange}
          />
        </FormControl>
      )}
    />
  );
};

export default RatingField;
