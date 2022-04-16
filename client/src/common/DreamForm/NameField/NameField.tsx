import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

const NameField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="name"
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <TextField
            id="name"
            label="Dream name"
            value={value}
            onChange={onChange}
          />
        </FormControl>
      )}
    />
  );
};

export default NameField;
