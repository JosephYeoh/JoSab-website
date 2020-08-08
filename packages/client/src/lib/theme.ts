import { theme } from '@chakra-ui/core';
import breakpoints from 'util/breakpoints';

export const customTheme = {
  ...theme,
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, sans-serif;',
    mono: '-apple-system, BlinkMacSystemFont, sans-serif;'
  },
  breakpoints
};
