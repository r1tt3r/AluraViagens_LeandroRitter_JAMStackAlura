/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Viagens</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
App.defaultProps = {
  Component: '',
  pageProps: '',
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Component: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.any,
};
