import vars from './theme/theme'
type T = typeof vars;
declare module "styled-components" {
  export interface DefaultTheme extends T {}
}
