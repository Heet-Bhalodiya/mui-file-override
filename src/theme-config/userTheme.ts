const userTheme = {
  typography: {
    fontFamily: " 'Arial' , 'Ubuntu' , 'PT Sans' ",
    h1: {
      fontSize: "110px",
      lineHeight: "112px",
      fontWeight: 500,
    },
    h2: {
      fontSize: " 80px",
      lineHeight: "72px",
      fontWeight: 500,
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#ee76f5",
          padding: "24px !important",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 900,
          borderRadius: 15,
          lineHeight: 1.71,
          letterSpacing: "0.3px",
        },
        contained: {
          boxShadow:
            "8px 6px 6px -1px rgba(0,254,244,0.2), 0px 1px 1px 0px rgba(0,210,254,1.4), 0px 1px 3px 0px rgba(0,254,255,1.2)",
          padding: "12px",
        },
      },
    },
  },
};

export default userTheme;
