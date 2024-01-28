import useFormElement from '@/app/hooks/useFormElement';
import { ButtonProps, Button as CarbonButton } from '@carbon/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FilterElementProps } from '../Filters/FilterTypes';

export default function Button(props: ButtonProps<React.ElementType> & FilterElementProps): JSX.Element {
  const { currentValue, control } = useFormElement(props.name);

  return (
    <Controller
      control={control}
      name={props.name ?? ''}
      render={({ field: { onChange, ...fieldProps } }) => (
        <CarbonButton
          {...props}
          {...fieldProps}
          onClick={(e) => {
            onChange(props.value);
            props.onClick?.(e);
          }}
          {...(currentValue !== props.value && {
            kind: 'ghost',
          })}
        />
      )}
    />
  );
}
