// https://www.npmjs.com/package/react-images-uploading
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Button, FormControl, FormHelperText } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import { StyledInput } from './UploadField.styles';

const UploadField = () => {
  const {
    control,
    formState: { errors = {} },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="image"
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <Box
            display="flex"
            alignItems="center"
            px={2}
            py={2}
            border="1px solid #0000003b"
            borderRadius={1}
          >
            <label htmlFor="image">
              <StyledInput
                id="image"
                type="file"
                onChange={onChange}
                value={value}
              />
              <Button variant="contained" component="span">
                <UploadFileIcon />
              </Button>
            </label>
            <FormHelperText>{value}</FormHelperText>
          </Box>
          <FormHelperText error>{errors.image?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default UploadField;
