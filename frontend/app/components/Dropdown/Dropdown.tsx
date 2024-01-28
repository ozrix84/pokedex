import useFormElement from '@/app/hooks/useFormElement';
import { DropdownProps } from '@carbon/react/lib/components/Dropdown/Dropdown';
import React from 'react';
import { Dropdown as CarbonDropdown } from '@carbon/react';
import { FilterElementProps, Option } from '../Filters';
import { Controller } from 'react-hook-form';

export default function Dropdown<T extends Option>(
  props: Readonly<DropdownProps<T>> & FilterElementProps,
): JSX.Element {
  const { control } = useFormElement(props.name);

  return (
    <Controller
      control={control}
      name={props.name ?? ''}
      render={({ field: { onChange, ...fieldProps } }) => (
        <CarbonDropdown
          {...fieldProps}
          {...props}
          onChange={(value) => {
            onChange(value.selectedItem?.id);
          }}
        />
      )}
    />
  );
}
