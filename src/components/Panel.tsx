import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Panel() {
  return (
    <Flex  
      as="section"
      bgImage="url('/background.svg')" 
      w="100%" 
      h="80"
      align="center"
      justify="space-around"
    > 
      <Stack>
        <Text as="h2" fontSize="2rem" fontWeight="medium" color="white.800">
          5 Continentes, <br /> 
          infinitas possibilidades.
        </Text> 
        <Text as="span" fontSize="1rem" color="gray.100">
          Chegou a hora de tirar do papel a viagem que você <br />
          sempre sonhou.
        </Text>
      </Stack>
      <Image src="/icons/airplane.svg" alt="Airplane" mt="24" />
    </Flex>
  )
}