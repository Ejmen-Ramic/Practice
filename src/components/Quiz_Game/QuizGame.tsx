import { HStack, VStack } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";

const QuizGame = () => {
  return (
    <VStack w={'600px'} mt={'50px'}>
      <ProgressBar current={0} total={0} />
      <QuestionCard
        index={1}
        question={"A car engine's job is to:"}
        answers={[]}
      />
    </VStack>
  );
};

export default QuizGame;
