import { VStack } from "@chakra-ui/react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Web = () => {
    return(
        <VStack
        justifyContent={'space-between'}
        minH={"100vh"}
        spacing={'20px'}
        >
            <Header/>
            <Content/> 
            <Footer/>
        </VStack>
    )
}

export default Web