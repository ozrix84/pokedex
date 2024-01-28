'use client';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Search from '../Search';
import { FilterValues } from './FilterTypes';
import { options } from './filterOptions';

export default function Filters(): JSX.Element {
  const form = useForm<FilterValues>({
    defaultValues: {
      show: 'all',
      type: 1,
      search: '',
    },
  });

  return (
    <FormProvider {...form}>
      <Button name="show" value="all">
        All
      </Button>

      <Button name="show" value="favorites">
        Favorites
      </Button>

      <Search name="search" labelText={'Search'} />

      <Dropdown
        name={'type'}
        titleText={'Select pokemon type'}
        label={'Type'}
        id={'Dropdown.Type'}
        itemToString={(item) => item?.text ?? ''}
        items={options}
      />
    </FormProvider>
  );
}
