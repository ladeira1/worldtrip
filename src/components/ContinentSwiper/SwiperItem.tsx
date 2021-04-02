import { Center, Stack, Text } from '@chakra-ui/react'

interface SwiperItemProps {
  name: string
  description: string
  imageUrl: string
}

export function SwiperItem({ name, description, imageUrl }: SwiperItemProps) {
  return (
    <Center 
      w="100%" 
      h="80"
      backgroundImage={`url(${imageUrl})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      align="center" 
    >
      <Stack>
        <Text as="h2" fontSize="1.75rem" fontWeight="bold" color="white.800">
          {name}
        </Text>
        <Text as="span" fontSize="1rem" fontWeight="bold" color="gray.100">
          {description}
        </Text>
      </Stack>
    </Center>
  )
}