import { Stack, Image, Text } from "@chakra-ui/react";

interface CategoryItemProps {
  icon: string
  message: string
}

export function CategoryItem({ icon, message }: CategoryItemProps) {
  return (
    <Stack align="center">
      <Image src={icon} alt={message} w="14" />
      <Text as="span" fontWeight="semibold">{message}</Text>
    </Stack>
  )
}