import React, { Suspense, lazy } from 'react';
import Header from "./Header";
import '../styles/index.css';
import Grid from '@mui/material/Grid';

const Presentación = lazy(() => import("./Presentación"));
const Quehacemos = lazy(() => import("./Quehacemos.jsx"));

function App() {
  return (
    <Grid container style={{ width: '100vw', margin: 0, padding: 0 }}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Presentación />
        <Quehacemos />
      </Suspense>
    </Grid>
  );
}

export default App;
