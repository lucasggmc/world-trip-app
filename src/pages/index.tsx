import { Flex, Box, Heading, Text, Grid } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import Image from 'next/image'
//import { Image } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      direction="column"
    >
      <Header />

      <Flex bg="url('/images/home-banner.svg') no-repeat" w="100%" h="335" backgroundSize="cover" pl="140" pr="140">
        <Flex w="50%" direction="column" gridGap="5" justifyContent="center">
          <Heading as="h1" size="lg" color="gray.50" fontWeight="500" display="flex" flexDirection="column">
            5 Continentes, <Box as="span">infinitas possibilidades. </Box>
          </Heading>

          <Text as="p" color="gray.200" maxW="450">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>

        </Flex>
        <Flex w="50%" alignItems="flex-end" justifyContent="flex-end" mb="-8">
          <Image
            src="/images/airplane.svg"
            alt="Imagem de um avião nas nuvens"
            //layout="responsive"
            width={417}
            height={270}           
          />
        </Flex>

        {/* <Image src="/images/home-banner.svg" alt="Segun Adebayo" w="100%" /> */}
      </Flex>

      <Box h="145" w="100%" pl="140" pr="140" mt="20">
        <Grid templateColumns="repeat(5, 1fr)" gap="initial" h="100%">
          <Flex direction="column" justifyContent="space-between" h="100%">
            <span>teste 1</span>
            <span>teste 2</span>
          </Flex>
          <Flex direction="column" justifyContent="space-between" h="100%">
            <span>teste 1</span>
            <span>teste 2</span>
          </Flex>
          <Flex direction="column" justifyContent="space-between" h="100%">
            <span>teste 1</span>
            <span>teste 2</span>
          </Flex>
          <Flex direction="column" justifyContent="space-between" h="100%">
            <span>teste 1</span>
            <span>teste 2</span>
          </Flex>
          <Flex direction="column" justifyContent="space-between" h="100%">
            <span>teste 1</span>
            <span>teste 2</span>
          </Flex>
        </Grid>
      </Box>

    </Flex>
  )
}
