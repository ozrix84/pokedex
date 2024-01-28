'use client';
import { Button, Column, Dropdown, Grid, Search } from '@carbon/react';

export default function Filters(): JSX.Element {
  return (
    <Grid>
      <Column lg={4}>
        <Button>All</Button>
        <Button>Favorites</Button>
      </Column>
      <Column lg={4}>
        <Search labelText={'Search'} />
        <Dropdown
          titleText={'Select pokemon type'}
          label={'Type'}
          id={'Dropdown.Type'}
          itemToString={(item) => item?.text ?? ''}
          items={[
            {
              id: 1,
              text: 'Type 1',
            },
            {
              id: 2,
              text: 'Type 2',
            },
          ]}
        />
      </Column>
    </Grid>
  );
}
