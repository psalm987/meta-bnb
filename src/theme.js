import { createTheme } from "@mui/material/styles";

const pxToRem = (px) => `${px / 16}rem`;

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#A02279",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#434343",
    },
  },
  typography: {
    fontFamily: ["Red Rose", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          fontSize: "1rem",
          borderRadius: "8px",
        },
        sizeLarge: {
          padding: `${pxToRem(14)} ${pxToRem(2 * 14)}`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: pxToRem(56),
          fontWeight: "400",
          lineHeight: pxToRem(78.4),
          letter: "-2%",
        },
        h2: {
          fontSize: pxToRem(48),
          fontWeight: 700,
          lineHeight: pxToRem(60),
        },
        subtitle1: {
          fontSize: pxToRem(24),
          lineHeight: pxToRem(35),
          fontWeight: 400,
        },
        subtitle2: {
          fontSize: pxToRem(18),
          lineHeight: pxToRem(35),
          fontWeight: 400,
        },
        gutterBottom: {
          marginBottom: pxToRem(48),
        },
      },
    },
  },
});

export default theme;
