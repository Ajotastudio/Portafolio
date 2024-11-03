import Header from "./Header";
import Presentación from "./Presentación";
import Quehacemos from "./Quehacemos.jsx";
import '../styles/index.css';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container style={{ width: '100vw', margin: 0, padding: 0 }}>
      <Header />
      <Presentación />
      {/* <Quehacemos /> */}
    </Grid>
  );
}

export default App;
