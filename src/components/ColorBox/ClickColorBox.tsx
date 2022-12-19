import { Box, Button, Center, HStack, useControllableState, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
/** Mouse event where the selected button will send info */
type ClickColorBoxProps = {
  currentColor?: string
  handleChange: (event: React.ChangeEvent<HTMLElement>) =>void
}

const ClickColorBox = () => {
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(event.target);
    console.log(event.currentTarget);
  };
  return (
    <HStack justifyContent={"center"} marginY={'25%'}>
      <VStack>
        <Button
          w={"100px"}
          h={"100px"}
          borderColor={"red"}
          colorScheme={'red'}
          borderWidth={"3px"}
          borderRadius={''}
          backgroundColor={'white'}
          onClick={handleClick}

        >Click</Button>
        <Button
          w={"100px"}
          h={"100px"}
          borderColor={"blue"}
          colorScheme={'blue'}
          borderWidth={"3px"}
          borderRadius={''}
          backgroundColor={'white'}

        ></Button>
      </VStack>
      <VStack>
        <Button
          w={"100px"}
          h={"100px"}
          borderColor={"green"}
          colorScheme={'green'}
          borderWidth={"3px"}
          borderRadius={''}
          backgroundColor={'white'}

        ></Button>
        <Button
          w={"100px"}
          h={"100px"}
          borderColor={"yellow"}
          colorScheme={'yellow'}
          borderWidth={"3px"}
          borderRadius={''}
          backgroundColor={'white'}
        ></Button>
      </VStack>
    </HStack>
  );
};

export default ClickColorBox;
