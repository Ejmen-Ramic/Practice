import { Box, Button, Divider, HStack, VStack } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";

const Result = () => {
  return (
    <VStack w={"600px"} mt={"50px"}>
      <ProgressBar current={0} total={0} />
      <Box
        w={"100%"}
        h={"200px"}
        p={"10px"}
        border={`1px solid #DFDFDF`}
        marginTop="10px"
        marginLeft="2%"
        alignItems="left"
      >
        <Box ml={"7px"} fontSize="25px" color="#20252f">
          <b>You are a car expert!!</b>
        </Box>
        <Box
          ml={"7px"}
          mb={"15px"}
          mt={"15px"}
          fontWeight=""
          fontSize="16px"
          color="#20252f"
        >
          You have got best answers! based on your answer, our system detected
          that you are a car expert!
        </Box>
        <Divider />
        <Button
          size="lg"
          h="40px"
          w="150px"
          bg="black"
          mt={"20px"}
          ml={"74%"}
          color="white"
          fontSize="12px"
          border="1px"
          borderRadius="0px"
          borderColor="black"
          letterSpacing="3px"
          _hover={{ bg: "white", color: "black" }}
        >
          RESTART
        </Button>
      </Box>
    </VStack>
  );
};

export default Result;

