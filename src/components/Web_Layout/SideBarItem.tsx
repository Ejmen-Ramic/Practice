import { Box } from "@chakra-ui/react";
import { FC } from "react";

export type SideBarItemProps = {
    index: number
    text: string
}


const SideBarItem: FC<SideBarItemProps> = ({ index, text }) => {
    return(
        <Box alignItems={'start'} w={'100%'} h={'400px'}>
        {text} {index}
        </Box>
    )
}

export default SideBarItem