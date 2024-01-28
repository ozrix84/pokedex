import { useFormContext, useWatch } from 'react-hook-form';

export default function useFormElement(name = '') {
  const { control } = useFormContext();
  const currentValue = useWatch({ control, name });

  return {
    currentValue,
    control,
  };
}
