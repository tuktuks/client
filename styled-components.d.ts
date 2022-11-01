import theme from 'styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
