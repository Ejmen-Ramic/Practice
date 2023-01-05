import { extendTheme } from "@chakra-ui/react";
import Quiz from "./Quiz_Game";

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
  return <Quiz />;
};

export default MainContainer;
