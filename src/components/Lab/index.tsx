import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ArrowIcon, { ArrowDirection, ArrowIconProps } from "./ArrowIcon";

//** if = ?, else = : */
const Lab = () => {
  const [direction, setDirection] = useState<ArrowDirection>("down");
  return (
    <Box
      cursor={"pointer"}
      onClick={() => {
        setDirection(direction === "down" ? "up" : "down");
      }}
    >
      <ArrowIcon variant={direction} />
    </Box>
  );
};

export default Lab;
