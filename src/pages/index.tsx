import { Flex } from "@chakra-ui/layout";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh"
      maxW="1280px" 
      mx="auto"
    >
      <Header />
    </Flex>
  )
}
