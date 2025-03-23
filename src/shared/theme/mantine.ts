import type { MantineThemeOverride } from '@mantine/core';

export const theme: Partial<MantineThemeOverride> = {
  defaultRadius: 'sm',
  primaryColor: 'primary',
  primaryShade: 7,
  breakpoints: {
    xs: '412px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  colors: {
    primary: [
      '#e6f2ef',
      '#cce6e1',
      '#99ccc4',
      '#66b3a6',
      '#339988',
      '#008577',
      '#006b5f',
      '#005247',
      '#00392f',
      '#002118'
    ],
  },
    
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 412,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
        },
      },
    },
    Button: {
      defaultProps: {
        size: 'xs',
      },
      styles: {
        section: {
          marginRight: 4,
          marginLeft: 1,
        },
      },
    },

    Input: {
      defaultProps: {
        size: 'sm',
      },
    },
    TextInput: {
      defaultProps: {
        size: 'sm',
      },
    },
    NumberInput: {
      defaultProps: {
        size: 'sm',
      },
    },
    Select: {
      defaultProps: {
        size: 'sm',
      },
    },
    PasswordInput: {
      defaultProps: {
        size: 'sm',
      },
    },
    Breadcrumbs: {
      styles: {
        breadcrumb: {
          fontSize: '14px',
        },
      },
    },
    AppShell: {
      styles: {
        main: {
          backgroundColor: '#008577'
        },
        header: {
          height: 40,
        },
      },
    },
  },
};
