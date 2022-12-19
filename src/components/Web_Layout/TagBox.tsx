import { Center } from "@chakra-ui/react";
import { FC } from "react"

type TagBoxProps = {
    text: string;
}

const TagBox: FC<TagBoxProps> = ({text}) => {
    return(
        <Center
        margin={"20px"}
        borderColor={"black"}
        borderWidth={"3px"}
        w={"45%"}
        h={"90%"}
      >{text}</Center>
    )
}


export default TagBox

