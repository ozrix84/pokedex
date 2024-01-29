'use client';
import { Column, Grid } from '@carbon/react';
import Card from './components/Card';
import Filters from './components/Filters';

export default function Home() {
  return (
    <>
      <Filters />
      <Grid condensed>
        {[...new Array(12)].map((item, i) => (
          <Column span={4} key={i}>
            <Card />
          </Column>
        ))}
      </Grid>
    </>
  );
}
