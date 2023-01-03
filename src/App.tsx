import Main from './components/Main';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import themeCollection from './theme-config/themeCollection';

// import rtlPlugin from 'stylis-plugin-rtl';
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';

// const cacheRtl = createCache({
//   key: 'mui-rtl',
//   stylisPlugins: [rtlPlugin],
// });

function App() {

  return (
    // <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={themeCollection}>
      <Container>
        <Typography variant="h3" align='center'>
          TODO APP
        </Typography>
        <Main />
      </Container>
    </ThemeProvider>
    // </CacheProvider >
  );
}

export default App;