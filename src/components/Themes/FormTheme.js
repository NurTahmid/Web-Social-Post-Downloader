import { createTheme } from "@mui/material";

const FormTheme = createTheme({
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          width: "auto",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
  },
});

export default FormTheme;
