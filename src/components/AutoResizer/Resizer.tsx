import { Box, Button, HStack, Text} from "@chakra-ui/react";
import { useState } from "react";

const Resizer = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState<string>();
  /** This is a formula to generate random math numbers*/

  const RandomNumber = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const RandomColor = () => {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  };

  const RandomColor2 = () => {
    const R = RandomNumber(255, 0);
    const G = RandomNumber(255, 0);
    const B = RandomNumber(255, 0);
    const A = 1;
    return `rgba(${R}, ${G}, ${B}, ${A})`;
  };
  /** Button which will trigger the randomizer */
  const HandleClick = () => {
    setHeight(RandomNumber(200, 50));
    setWidth(RandomNumber(200, 50));
    setColor(RandomColor2());
  };

  return (
    /** Main Box */
    <HStack
      w={"50%"}
      h={"30%"}
      borderColor={"#C0C0C0"}
      backgroundColor={"#F0F8FF"}
      borderRadius={"5px"}
      borderWidth={"3px"}
    >
      {/** Left Button Box */}

      {/** Here the random size boxes will be generated */}
      <Button
      textOverflow={'ellipsis'}
        w={"100px"}
        h={"100px"}
        ml={"10%"}
        borderWidth={"3px"}
        borderColor={"black"}
        color={"white"}
        backgroundColor={"#333333"}
        cursor={"pointer"}
        _hover={{ bg: "#008080", color: "pink" }}
        onClick={HandleClick}
      >
        Generate <br/> random sized <br/>box
      </Button>

      <Box
        height={height}
        width={width}
        borderColor={"#8b0000"}
        backgroundColor={color}
        borderWidth={"3px"}
        ml={"20%"}
      ></Box>
    </HStack>
  );
};

export default Resizer;
