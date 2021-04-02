import { Flex, Stack, Box, Divider, Text } from "@chakra-ui/react";
import { Categories } from "../components/Categories";
import { ContinentSwiper } from "../components/ContinentSwiper";
import { Header } from "../components/Header";
import { Panel } from "../components/Panel";

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh"
      maxW="1280px" 
      mx="auto"
      px="4"
    > 
      <Stack w="100%" mb="80px">
        <Header />
        <Panel />
        <Box px="4" mx="auto" pb="8">
          <Categories />
          <Text align="center" fontSize="1.6rem" py="16">
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
          <ContinentSwiper />
        </Box>
      </Stack>
    </Flex>
  )
}
