import { Flex, HStack, Stack, Text, Image } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'

interface MostVisitedPlaces {
  name: string
  imageUrl: string
}

interface ContinentProps {
  name: string
  description: string
  imageUrl: string
  mostVisitedPlaces: MostVisitedPlaces[]
}

export default function Continent({ name, description, imageUrl, mostVisitedPlaces }: ContinentProps) {

  return (
    <Flex
      flexDir="column"
      w="100vw" 
      h="100vh"
      maxW="1280px" 
      mx="auto"
      px="4"
    >
      <Header />
      <Stack w="100%" mb="80px" spacing="12">
        <Banner name={name} imageUrl={imageUrl} />
        <Flex px="16"> 
          <HStack>
            <Text as="p" maxW="50%" textAlign="justify" flex="1">
              {description}
            </Text>
            <Flex flex="1" align="center" justify="space-around">
              <Stack my="auto" align='center'>
                <Text fontSize="3rem" color="yellow.500" lineHeight="0.5" fontWeight="semibold">50</Text>
                <Text fontSize="1.25rem" color="gray.500" fontWeight="semibold">países</Text>
              </Stack>
              <Stack my="auto" align='center'>
                <Text fontSize="3rem" color="yellow.500" lineHeight="0.5" fontWeight="semibold">60</Text>
                <Text fontSize="1.25rem" color="gray.500" fontWeight="semibold">Línguas</Text>
              </Stack>
              <Stack my="auto" align='center'>
                <Text fontSize="3rem" color="yellow.500" lineHeight="0.5" fontWeight="semibold">21</Text>
                <Text fontSize="1.25rem" color="gray.500" fontWeight="semibold">cidades +100</Text>
              </Stack>  
            </Flex>
          </HStack>
        </Flex>

        <Stack px="16">
          <Text fontSize="1.5rem" fontColor="gray.500" fontWeight="semibold">Cidades +100</Text>
          <Flex align="center" justify="space-between">
            {mostVisitedPlaces.map(place => (
              <Flex flexDir="column" w="200px" h="220px" bg="white.900">
                <Image src={place.imageUrl} flex="1" borderTopLeftRadius="5px" borderTopRightRadius="5px"/>
                <Text flex="1" pt="4" pl="4" color="gray.700" fontWeight="semibold">{place.name}</Text>
              </Flex>
            ))}
          </Flex>
        </Stack>

      </Stack>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params
  let props: ContinentProps

  switch(String(name).toLowerCase()) {
    case 'europa': {
      props = {
        name: 'Europa',
        description: 'lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto ',
        imageUrl: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        mostVisitedPlaces: [
          { name: 'primeiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'segundo lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'terceiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
        ]
      }
      break
    }
    case 'africa': {
      props = {
        name: 'África',
        description: 'lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto ',
        imageUrl: 'https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        mostVisitedPlaces: [
          { name: 'primeiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'segundo lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'terceiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
        ]
      }
      break
    }
    case 'asia': {
      props = {
        name: 'Ásia',
        description: 'lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto ',
        imageUrl: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        mostVisitedPlaces: [
          { name: 'primeiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'segundo lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'terceiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
        ]
      }
      break
    }
    case 'americadosul': {
      props = {
        name: 'América do Sul',
        description: 'lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto ',
        imageUrl: 'https://images.unsplash.com/photo-1549706210-d587fa0050f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
        mostVisitedPlaces: [
          { name: 'primeiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'segundo lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'terceiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
        ]
      }
      break
    }
    case 'americadonorte': {
      props = {
        name: 'América do Norte',
        description: 'lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto lorem ipsum nao lembro o resto ',
        imageUrl: 'https://images.unsplash.com/photo-1612012539633-1ddf45bff52c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1457&q=80',
        mostVisitedPlaces: [
          { name: 'primeiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'segundo lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
          { name: 'terceiro lugar', imageUrl: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
        ]
      }
      break
    }
    default: {
      return {
        props: {  },
        revalidate: 60 * 60 * 24
      }
    }
  }

  return {
    props: props,
    revalidate: 60 * 60 * 24
  }
}