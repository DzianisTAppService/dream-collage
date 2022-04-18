import { useCallback } from 'react';
import { Schema } from 'yup';

const useValidationResolver = (validationSchema: Schema<{}>): any => {
  return useCallback(
    async (data: Record<any, any>, context?: Record<string, any>) => {
      try {
        const values = await validationSchema.validate(data, {
          context,
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          // @ts-ignore
          errors: errors?.inner?.reduce(
            (allErrors: Record<any, any>, currentError: Record<any, any>) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
};

export default useValidationResolver;
