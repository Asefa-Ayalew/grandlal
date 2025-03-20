import type { MantineTheme, MantineThemeOverride } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

export const theme: MantineThemeOverride = {
  defaultRadius: "sm",
  primaryColor: "primary",
  primaryShade: 6,

  breakpoints: {
    xs: "36rem",
    sm: "48rem",
    md: "62rem",
    lg: "75rem",
    xl: "87.5rem",
  },

  colors: {
    primary: generateColors("#008374"), // Updated primary color
    secondary: generateColors("#006A5C"), // Darker green for contrast
    tertiary: generateColors("#00A58A"), // Lighter teal variant
  },

  components: {
    Button: {
      defaultProps: {
        size: "xs",
      },
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.primary[6],
          color: theme.white,
          borderRadius: theme.radius.md,
          padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
          "&:hover": {
            backgroundColor: theme.colors.primary[5],
          },
        },
      }),
    },
    AppShell: {
      styles: {
        main: {
          backgroundColor: "#F0FCF9", // Light greenish background
        },
        header: {
          height: 40,
          backgroundColor: "#007566", // Slightly darker than primary
        },
      },
    },
    Text: {
      styles: (theme: MantineTheme) => ({
        root: {
          color: theme.colors.primary[7], // Darker green for better readability
        },
      }),
    },
    Card: {
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: "#E6F8F4", // Soft greenish card background
          borderColor: theme.colors.primary[4],
        },
      }),
    },
    Input: {
      styles: (theme: MantineTheme) => ({
        input: {
          borderColor: theme.colors.primary[5],
          "&:focus": {
            borderColor: theme.colors.primary[6],
          },
        },
      }),
    },
  },
};
