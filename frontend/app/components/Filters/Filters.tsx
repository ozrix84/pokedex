'use client';
import { ButtonSet, Column, Dropdown, FlexGrid, Row } from '@carbon/react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../Button';
import Search from '../Search';
import { FilterValues } from './FilterTypes';

const options = [
  {
    id: 1,
    text: 'Type 1',
  },
  {
    id: 2,
    text: 'Type 2',
  },
];

export default function Filters(): JSX.Element {
  const form = useForm<FilterValues>({
    defaultValues: {
      show: 'all',
      type: 0,
      search: '',
    },
  });

  return (
    <FormProvider {...form}>
      <FlexGrid>
        <Row>
          <ButtonSet>
            <Button name="show" value="all">
              All
            </Button>

            <Button name="show" value="favorites">
              Favorites
            </Button>
          </ButtonSet>
        </Row>

        <Row>
          <Column>
            <Search name="search" labelText={'Search'} />
          </Column>

          <Column>
            <Dropdown
              titleText={'Select pokemon type'}
              label={'Type'}
              id={'Dropdown.Type'}
              itemToString={(item) => item?.text ?? ''}
              items={options}
            />
          </Column>
        </Row>
      </FlexGrid>
    </FormProvider>
  );
}
