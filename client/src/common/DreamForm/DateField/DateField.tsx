import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateField: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="time"
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <DatePicker
            label="Date"
            value={value}
            onChange={onChange}
            renderInput={(params) => (
              <TextField {...params} error={Boolean(errors.time?.message)} />
            )}
          />
          <FormHelperText error>{errors.time?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default DateField;
