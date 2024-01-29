'use client';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Search from '../Search';
import { FilterValues } from './FilterTypes';
import { options } from './filterOptions';
import { Column, Grid, Row } from '@carbon/react';

export default function Filters(): JSX.Element {
  const form = useForm<FilterValues>({
    defaultValues: {
      show: 'all',
      type: 1,
      search: '',
    },
  });

  return (
    <div>
      <FormProvider {...form}>
        <Row>
          <Grid condensed>
            <Column span={16}>
              <Button style={{ width: '50%' }} name="show" value="all">
                All
              </Button>
              <Button style={{ width: '50%' }} name="show" value="favorites">
                Favorites
              </Button>
            </Column>
          </Grid>
        </Row>

        <Row>
          <Grid narrow>
            <Column span={10}>
              <Search name="search" labelText={'Search'} />
            </Column>

            <Column span={6}>
              <Dropdown
                name={'type'}
                titleText={'Select pokemon type'}
                label={'Type'}
                id={'Dropdown.Type'}
                itemToString={(item) => item?.text ?? ''}
                items={options}
              />
            </Column>
          </Grid>
        </Row>
      </FormProvider>
    </div>
  );
}
