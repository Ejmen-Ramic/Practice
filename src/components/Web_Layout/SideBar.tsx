import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import SideBarItem, { SideBarItemProps } from "./SideBarItem";

type SideBarProps = {
  items: SideBarItemProps[];
};

const SideBar: FC<SideBarProps> = ({ items }) => {
  return (
    <VStack
      alignItems={"start"}
      p={"20px"}
      borderColor={"black"}
      borderWidth={"3px"}
      w={"25%"}
      h={"100%"}
    >
      {items.map((item) => {
        return <SideBarItem index={item.index} text={item.text} />;
      })}
    </VStack>
  );
};

export default SideBar;
