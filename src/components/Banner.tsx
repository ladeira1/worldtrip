import { Flex, Text } from '@chakra-ui/react'

interface BannerProps {
  name: string
  imageUrl: string
}

export function Banner({ name, imageUrl }: BannerProps) {
  return (
    <Flex 
      w="100%"
      h="80"
      px="10"
      py="6"
      align="flex-end"
      justify="flex-start"
      backgroundImage={`url(${imageUrl})`}
    >
      <Text
        fontSize="2rem"
        fontWeight="semibold"
        color="white.800"
      >
        {name}
      </Text>
    </Flex>
  )
}