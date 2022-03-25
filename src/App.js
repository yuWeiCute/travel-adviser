import React from 'react'
//CssBaseline is a component from material UI that simply normalizes the styles so it's just going to fix some padding margins and background colors immediately for us 

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid >
          <List

          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map

          />
        </Grid>
      </Grid>
    </>
  )
}

export default App