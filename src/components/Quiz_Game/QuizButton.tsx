import { Box, Button, HStack } from "@chakra-ui/react";

const QuizButton = () => {
  return (
    <HStack w={'100%'}>
      <Box ml={'46%'}>
      <Button
        size="lg"
        h="40px"
        w="150px"
        bg="white"
        mt={'10px'}
        color="black"
        fontSize="12px"
        border="1px"
        borderRadius="0px"
        borderColor="black"
        letterSpacing="3px"
        _hover={{ bg: "black", color: "white" }}
      >
        BACK
      </Button>
      <Button
        size="lg"
        h="40px"
        w="150px"
        bg="black"
        mt={'10px'}
        ml={'10px'}
        color="white"
        fontSize="12px"
        border="1px"
        borderRadius="0px"
        borderColor="black"
        letterSpacing="3px"
        _hover={{ bg: "white", color: "black" }}
      >
        NEXT
      </Button>
      </Box>
    </HStack>
  );
};

export default QuizButton;
