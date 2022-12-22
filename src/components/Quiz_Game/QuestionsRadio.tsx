import { HStack, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";

export function IndeterminateExample() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (

      <HStack  spacing={1} >
        <RadioGroup mt={'7px'}  mb={'7px'} mr={'350px'}>
          <Stack spacing={2} >
            <Radio colorScheme="blue" value="1">
              convert fuel into heat
            </Radio>
            <Radio colorScheme="blue" value="2">
              convert fuel into motion
            </Radio>
            <Radio colorScheme="blue" value="3">
              convert fuel into exhaust
            </Radio>
            <Radio colorScheme="blue" value="4">
              decorate the car
            </Radio>
          </Stack>
        </RadioGroup>
      </HStack>
  );
}
