import { Heading, HStack } from "@chakra-ui/react";

export type HeaderTextProps = {
  text?: string
}

const Header = () => {
  return (
    <HStack
      borderColor={"black"}
      borderWidth={"3px"}
      w={"100%"}
      h={"100px"}
    >
      <Heading marginLeft={'30px'}>Ejmen's Website</Heading>
    </HStack>
    
  );
};



export default Header;
