import { extendTheme } from "@chakra-ui/react";
import App from "./AutoResizer";
import AutoResizer from "./AutoResizer";
import MainColorBox from "./ColorBox";
import Calculator from "./SmallCalculator";
import Web from "./Web_Layout";
import Multiplier from "./SmallCalculator/Multiplier";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const theme = extendTheme({
  breakpoints,
});

const MainContainer = () => {
  return <Multiplier />;
};

export default MainContainer;
