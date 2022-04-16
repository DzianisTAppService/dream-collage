import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

const TimeField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="time"
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <TextField id="time" label="Time" value={value} onChange={onChange} />
        </FormControl>
      )}
    />
  );
};

export default TimeField;
