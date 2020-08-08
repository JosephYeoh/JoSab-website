import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apollo';
import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { customTheme } from 'lib/theme';

interface PageBasedProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const AppProviders: React.FC<PageBasedProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

class MyApp extends App {
  render() {
    return <AppProviders {...this.props} />;
  }
}

export default MyApp;
