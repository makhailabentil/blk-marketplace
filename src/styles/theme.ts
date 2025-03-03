import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    black: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    accent: {
      50: '#fff9db',
      100: '#ffe484',
      200: '#ffd541',
      300: '#ffc700',
      400: '#ffb800',
      500: '#ffa200',
    }
  },
  fonts: {
    heading: '"Space Grotesk", sans-serif',
    body: '"Inter", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'black.900',
        color: 'white'
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'xl',
      },
      defaultProps: {
        variant: 'solid',
      },
    },
    Input: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
})

export default theme