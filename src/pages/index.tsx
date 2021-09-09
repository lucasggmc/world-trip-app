import { Flex, Box, Heading, Text, Grid, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import Image from 'next/image'
//import { Image } from "@chakra-ui/react"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

      <Box h="auto" w="100%" pl="140" pr="140" mt="20" mb="80px">
        <Grid templateColumns="repeat(auto-fit, 158px)" justifyContent="space-around" gap="20" h="100%">
          <Flex direction="column" justifyContent="space-between" alignItems="center" h="100%">
            <Box w="auto">
              <Image
                src="/icons/cocktail.svg"
                alt="Coquetel/Drink"
                width={85}
                height={85}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              vida noturna
            </Text>

          </Flex>
          <Flex direction="column" justifyContent="space-between" alignItems="center" h="100%">
            <Box w="auto">
              <Image
                src="/icons/surf.svg"
                alt="Prancha de surf e sol"
                width={85}
                height={85}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              praia
            </Text>
          </Flex>
          <Flex direction="column" justifyContent="space-between" alignItems="center" h="100%">
            <Box w="auto">
              <Image
                src="/icons/building.svg"
                alt="Edifício"
                width={85}
                height={85}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              moderno
            </Text>
          </Flex>
          <Flex direction="column" justifyContent="space-between" alignItems="center" h="100%">
            <Box w="auto">
              <Image
                src="/icons/museum.svg"
                alt="Museu"
                width={85}
                height={85}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              clássico
            </Text>
          </Flex>
          <Flex direction="column" justifyContent="space-between" alignItems="center" h="100%">
            <Box w="auto">
              <Image
                src="/icons/earth.svg"
                alt="Planeta terra"
                width={85}
                height={85}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              e mais...
            </Text>
          </Flex>
        </Grid>
      </Box>


      <Divider width="90px" border="2px solid" margin="0 auto" borderColor="gray.600"/>

      <Heading as="h1" size="lg" color="gray.600" fontWeight="500" display="flex" flexDirection="column" textAlign="center" mt="52px" mb="52px">
        Vamos nessa? <Box as="span">Então escolha seu continente </Box>
      </Heading>

      <Box w="100%" h="450">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={2}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>      
    </Swiper>
      </Box>

    <h1>teste</h1>
    <h1>teste</h1>
    <h1>teste</h1>
    </Flex>
  )
}
