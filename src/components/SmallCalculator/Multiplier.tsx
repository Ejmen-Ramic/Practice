import { Box, Center, HStack, Input, Tag } from "@chakra-ui/react";
import * as React from "react";

const Multiply: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [result, setResult] = React.useState(0);

 const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(Number(event.target.value));
  handleResultChange();
};

const handleValue2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue2(Number(event.target.value));
  handleResultChange();
};

  const handleResultChange = () => {
    const result = multiply(value, value2);
    setResult(result);
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Center marginTop={'15%'}>
      <HStack>
        <Tag>Enter a number:</Tag>
        <Box>
          <Input
            min={10}
            max={20}
            type="number"
            id="input"
            value={value}
            onChange={handleValueChange}
            borderWidth={"3px"}
            borderColor={"black"}
          />
        </Box>
        <Box fontWeight={'bold'} fontSize={'25px'} >*</Box>
        <Box>
          <Input
            min={10}
            max={20}
            type="number"
            id="input2"
            value={value2}
            onChange={handleValue2Change}
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
          <Center>{result}</Center>
        </Box>
      </HStack>
    </Center>
  );
};

function multiply(value: number, value2: number): number {
  return value * value2;
}

export default Multiply;
