import 'styled-components/native';

import type { defaultTheme } from '@app/themes/default';

type Theme = typeof defaultTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
