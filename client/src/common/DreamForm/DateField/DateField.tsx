import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="time"
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <DatePicker
            label="Date"
            value={value}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      )}
    />
  );
};

export default DateField;
