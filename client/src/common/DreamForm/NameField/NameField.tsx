import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormHelperText, TextField } from '@mui/material';

const NameField: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
            error={Boolean(errors.name?.message)}
          />
          <FormHelperText error>{errors.name?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default NameField;
