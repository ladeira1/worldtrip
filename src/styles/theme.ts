import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08',
      '100':  'rgba(255, 186, 8, 0.5)',
    },
    gray: {
      '900': '#000',
      '700': '#47585B',
      '500': '#999999',
      '200': 'rgba(153, 153, 153, 0.5)',
      '100': '#DADADA'
    },
    white: {
      '900': '#fff',
      '800': '#F5F8FA',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.800',
        color: 'gray.700',
      }
    }
  }
})