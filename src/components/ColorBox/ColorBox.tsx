import { Box, Center, HStack } from "@chakra-ui/react";
import ClickColorBox from "./ClickColorBox";

const ColorBox = () => {
  return (
    <HStack w={"full"} h={"100vh"}>
      {" "}
      {/** Main Box */}
      <Center w={"full"} h={"full"} >
        {/** Left Sub Box */}
        <Box
          w={"25%"}
          h={"50%"}
          borderColor={'black'}
          borderWidth={"3px"}
          marginRight={"20px"}
        >
        <ClickColorBox/>
        </Box>
        {/** Right Main Box */}
        <Box w={"45%"} h={"50%"} borderColor={"black"} borderWidth={"3px"}>
          {/** Box that will be colored by clicking on other boxes */}
          <Center>
          <Box  my={'2.3%'} w={'95%'} h={'45vh'} borderWidth={'1px'} borderColor={'gray'} >{/*Insert the output here*/}</Box>
          </Center>
        </Box>
      </Center>
    </HStack>
  );
};

export default ColorBox;
