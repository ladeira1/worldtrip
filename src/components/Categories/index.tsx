import { Flex, Box } from "@chakra-ui/react";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  return (
    <>
      <Flex py="16" mx="-50" align="center" justify="space-around">
        <CategoryItem icon="/icons/cocktail.svg" message="vida noturna" />
        <CategoryItem icon="/icons/beach.svg" message="praia" />
        <CategoryItem icon="/icons/building.svg" message="moderno" />
        <CategoryItem icon="/icons/museum.svg" message="clássico" />
        <CategoryItem icon="/icons/earth.svg" message="e mais..." />
      </Flex>
      <Box w="14" h="0.5" borderRadius="4px" bg="gray.700" mx="auto" />
    </>
  )
}