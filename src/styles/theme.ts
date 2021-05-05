import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#47585B',
      '600': '#999999',
      '300': '#DADADA',
      '200': '#F5F8FA',
    },
    yellow: {
      '300': '#FFBA08',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.900'
      }
    }
  }
})