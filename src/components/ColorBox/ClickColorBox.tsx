import { Box, Button, Center, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export type ClickColorBoxProps = {
  currentColor?: string;
  handleChange: (event: React.ChangeEvent<HTMLElement>) => void;
};

const ClickColorBox = () => {
  const [secondBoxColor, setSecondBoxColor] = useState("");

  const handleBoxClick = (color: string) => {
    setSecondBoxColor(color);
  };

  return (
    <HStack w={"full"} h={"100vh"} justifyContent={"center"}>
      <HStack
        w={"25%"}
        h={"50%"}
        borderColor={"black"}
        borderWidth={"3px"}
        marginRight={"20px"}
        justifyContent={"center"}
      >
        <VStack>
          <Button
            w={"100px"}
            h={"100px"}
            borderColor={"red"}
            colorScheme={"red"}
            borderWidth={"3px"}
            borderRadius={""}
            backgroundColor={"white"}
            onClick={() => handleBoxClick("red")}
          ></Button>
          <Button
            w={"100px"}
            h={"100px"}
            borderColor={"blue"}
            colorScheme={"blue"}
            borderWidth={"3px"}
            borderRadius={""}
            backgroundColor={"white"}
            onClick={() => handleBoxClick("blue")}
          ></Button>
        </VStack>
        <VStack>
          <Button
            w={"100px"}
            h={"100px"}
            borderColor={"green"}
            colorScheme={"green"}
            borderWidth={"3px"}
            borderRadius={""}
            backgroundColor={"white"}
            onClick={() => handleBoxClick("green")}
          ></Button>
          <Button
            w={"100px"}
            h={"100px"}
            borderColor={"yellow"}
            colorScheme={"yellow"}
            borderWidth={"3px"}
            borderRadius={""}
            backgroundColor={"white"}
            onClick={() => handleBoxClick("yellow")}
          ></Button>
        </VStack>
      </HStack>
      <Box w={"45%"} h={"50%"} borderColor={"black"} borderWidth={"3px"}>
        <Center>
          <Box
            mt={"5px"}
            w={"98%"}
            h={"360px"}
            borderWidth={"2px"}
            borderColor={"gray"}
            bg={secondBoxColor}
          ></Box>
        </Center>
      </Box>
    </HStack>
  );
};

export default ClickColorBox;
