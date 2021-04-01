import { Flex } from "@chakra-ui/react";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  return (
    <Flex py="20" px="8" mx="auto" align="center" justify="space-around">
      <CategoryItem icon="/icons/cocktail.svg" message="vida noturna" />
      <CategoryItem icon="/icons/beach.svg" message="praia" />
      <CategoryItem icon="/icons/building.svg" message="moderno" />
      <CategoryItem icon="/icons/museum.svg" message="clássico" />
      <CategoryItem icon="/icons/earth.svg" message="e mais..." />
    </Flex>
  )
}