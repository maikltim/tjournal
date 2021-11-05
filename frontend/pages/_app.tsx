import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';
import Head from 'next/head'


import '../styles/globals.css';
import 'macro-css';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>RJournal</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </MuiThemeProvider>
    </>
  );
}

export default MyApp;
