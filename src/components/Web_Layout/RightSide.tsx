import { Box, HStack, VStack } from "@chakra-ui/react";
import TagBox from "./TagBox";

const array1 = [<Box>Ejmen</Box>];
console.log(
  array1.map((item, i) => {
    return item;
  })
);

const array2 = Array(20).fill(5);
console.log(array2.map);

const RightSide = () => {
  return (
    /** Main container for the right side */
    <VStack h={"100%"} w={"75%"}>
      {/* Upper main box */}
      <HStack
        p={"20px"}
        spacing={"20px"}
        borderColor={"black"}
        borderWidth={"3px"}
        w={"100%"}
        h={"35%"}
      >
        {Array(4)
          .fill(5)
          .map((item, i) => {
            return (
              <Box
                key={i}
                borderColor={"black"}
                borderWidth={"3px"}
                w={"full"}
                h={"100%"}
              ></Box>
            );
          })}
      </HStack>

      {/* Lower main box */}
      <HStack borderColor={"black"} borderWidth={"3px"} w={"100%"} h={"63%"}>
        <TagBox text={"Yes"} />
        <TagBox text={"No"} />
      </HStack>
    </VStack>
  );
};

export default RightSide;
