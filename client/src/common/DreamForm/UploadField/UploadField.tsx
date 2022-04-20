// https://www.npmjs.com/package/react-images-uploading
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ImageUploading from 'react-images-uploading';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
} from '@mui/material';

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
            <ImageUploading
              multiple
              value={value}
              onChange={onChange}
              maxNumber={1}
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }: any) => (
                <Box flexGrow={1}>
                  {!imageList.length && (
                    <Button
                      variant="contained"
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </Button>
                  )}
                  {imageList.map((image: any, index: any) => (
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      key={index}
                    >
                      <img src={image.dataURL} alt="" width="100%" />

                      <Box my={2} width="100%">
                        <Divider />
                      </Box>

                      <Box display="flex">
                        <Button
                          variant="outlined"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </Button>

                        <Box ml={3}>
                          <Button
                            variant="outlined"
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </ImageUploading>
          </Box>
          <FormHelperText error>{errors.image?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default UploadField;
