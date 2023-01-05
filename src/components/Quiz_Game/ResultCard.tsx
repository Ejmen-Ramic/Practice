import { HStack, Box, Button, Divider, VStack } from "@chakra-ui/react";
import React from "react";
import ProgressBar from "./ProgressBar";

type ResultCardProps = {
  correct: number;
  total: number;
  restartQuiz: () => void;
};

const ResultCard: React.FC<ResultCardProps> = ({
  correct,
  total,
  restartQuiz,
}) => {
  return (
    <VStack h={"230px"}>
      <ProgressBar current={total} total={total} />
      <HStack>
        <Box fontSize={"25px"} fontWeight={"600"} color={"#20252f"}>
          You are a car expert!!
        </Box>
      </HStack>
      <HStack>
        <Box>
          You have got the best answer! Based on your answers, our system
          detected that you are a car expert!!
        </Box>
      </HStack>
      <Divider />
      <HStack>
        <Box fontSize={"16px"} color={"#20252f"}>
          You got {correct} out of {total} questions correct!
        </Box>
      </HStack>
      <Divider />
      <Button
        size={"lg"}
        h={"40px"}
        w={"150px"}
        _hover={{ bg: "white", color: "black" }}
        bg={"black"}
        color={"white"}
        border={"1px"}
        borderRadius={"0px"}
        borderColor={"black"}
        letterSpacing={"3px"}
        fontSize={"12px"}
        onClick={restartQuiz}
      >
        RESTART
      </Button>
    </VStack>
  );
};

export default ResultCard;
