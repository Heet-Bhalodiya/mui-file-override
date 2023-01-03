import { Breakpoints, createTheme, Palette, Theme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import palette from "./palette";
import breakpoints from "./breakpoint";
import shadows from "./shadows";
import coreTypography from "./typography";
import userTheme from "./userTheme";
import components from "./components";

const coreTheme = {
  palette: palette as Palette,
  breakpoints: breakpoints as Breakpoints,
  components,
  typography: coreTypography as Theme["typography"],
  shadows,
  spacing: ((factor: any) => `${2 * factor}px`) as Theme["spacing"],
};

// const themeCollection = createTheme(deepmerge(coreTheme, userTheme));

const themeCollection = createTheme(deepmerge(coreTheme, userTheme));

// console.log("themeCollection", themeCollection);
export default themeCollection;
