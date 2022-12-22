import { HStack, VStack } from "@chakra-ui/react";
import QuizGame from "./QuizGame";
import Result from "./ResultCard";

const Quiz = () => {
  return (
    <HStack
     justifyContent="center" 
    >
      <QuizGame/>
      

    </HStack>
  );
};

export default Quiz;
