import { Stack, Image, Text } from "@chakra-ui/react";

interface CategoryItemProps {
  icon: string
  message: string
}

export function CategoryItem({ icon, message }: CategoryItemProps) {
  return (
    <Stack align="center" justify="center" flex="1">
      <Image src={icon} alt={message} w="20" />
      <Text as="span" fontSize="0.9rem" lineHeight="2" fontWeight="semibold">
        {message}
      </Text>
    </Stack>
  )
}