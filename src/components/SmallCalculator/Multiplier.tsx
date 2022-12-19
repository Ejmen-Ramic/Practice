import { Box, Center, HStack, Input, Tag } from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState, FC, ChangeEvent } from "react";

type Numbers = {
  n1: number;
  n2: number;
};

const Multiply: FC = () => {
  const [numbers, setNumbers] = useState<Numbers>({
    n1: 0,
    n2: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedNumber = Number(e.target?.value);

    setNumbers({
      ...numbers,
      [e.target?.name]: parsedNumber,
    });
  };

  return (
    <Center marginTop={"15%"}>
      <HStack>
        <Tag>Enter a number:</Tag>
        <Box>
          <Input
            min={10}
            max={20}
            type="number"
            id="input"
            name={"n1"}
            value={numbers?.n1}
            onChange={handleChange}
            borderWidth={"3px"}
            borderColor={"black"}
          />
        </Box>
        <Box fontWeight={"bold"} fontSize={"25px"}>
          *
        </Box>
        <Box>
          <Input
            min={10}
            max={20}
            type="number"
            id="input2"
            name={"n2"}
            value={numbers?.n2}
            onChange={handleChange}
            borderWidth={"3px"}
            borderColor={"black"}
          />
        </Box>
        <Box>=</Box>
        <Box
          id="output"
          placeholder={"??"}
          w={"50px"}
          h={"30px"}
          borderWidth={"3px"}
          borderColor={"black"}
        >
          <Center>{multiply(numbers.n1, numbers.n2)}</Center>
        </Box>
      </HStack>
    </Center>
  );
};

function multiply(value: number, value2: number): number {
  return value * value2;
}

export default Multiply;
