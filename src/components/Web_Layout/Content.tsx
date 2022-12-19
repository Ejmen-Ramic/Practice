import { HStack } from "@chakra-ui/react";
import { FC } from "react";
import RightSide from "./RightSide";
import SideBar from "./SideBar";
import SideBarItems from "./SideBarItems";

export type ContentProps = {
  firstText?: string;
  secondText?: string;
};

const Content: FC<ContentProps> = (firstText, secondText) => {
  return (
    <HStack borderColor={"black"} h={"400px"} w={"100%"} alignItems={"start"}>
      <SideBar items={SideBarItems}/>
      <RightSide />
    </HStack>
  );
};

export default Content;

