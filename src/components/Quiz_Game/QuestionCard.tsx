import { Box, Divider, HStack, VStack } from "@chakra-ui/react";
import { IndeterminateExample } from "./QuestionsRadio";
import { FC } from "react";
import QuizButton from "./QuizButton";

export type QuestionCardProps = {
  index: number;
  question: string;
  answers: {
    text: string;
    value: string;
  }[];
};

const QuestionCard: FC<QuestionCardProps> = ({ index, question, answers }) => {
  return (
    <HStack w={"100%"} h={"270px"} p={"10px"} border={`1px solid #DFDFDF`}>
      <VStack  w={"100%"}>
        <Box mb={'7px'} mr={'65%'} alignContent={'start'}><b>Q{index}:</b> {question} </Box>
          <Divider/>
          <IndeterminateExample />
          <Divider/>
          <QuizButton/>
      </VStack>
      </HStack>
  );
};

export default QuestionCard;
