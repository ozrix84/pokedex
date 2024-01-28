import useFormElement from '@/app/hooks/useFormElement';
import { Search as CarbonSearch, SearchProps } from '@carbon/react';
import { Controller } from 'react-hook-form';
import { FilterElementProps } from '../Filters/FilterTypes';

export default function Search(props: SearchProps & FilterElementProps): JSX.Element {
  const { control } = useFormElement(props.name);

  return (
    <Controller
      control={control}
      name={props.name ?? ''}
      render={({ field: { onChange, ...fieldProps } }) => (
        <CarbonSearch
          {...props}
          {...fieldProps}
          onChange={(e) => {
            onChange(props.value);
            props.onChange?.(e);
          }}
        />
      )}
    />
  );
}
