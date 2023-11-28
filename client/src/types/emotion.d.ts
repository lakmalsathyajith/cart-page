import '@emotion/react';

declare module '@emotion/react' {
  export interface ThemeType {
    colors: {
      primary: string;
      secondary: string;
      // ... other color properties
    };
    // ... other theme properties
  }
}
