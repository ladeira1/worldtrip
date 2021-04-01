import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Panel } from "../components/Panel";

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh"
      maxW="1280px" 
      mx="auto"
    > 
      <Stack w="100%">
        <Header />
        <Panel />
      </Stack>
    </Flex>
  )
}
