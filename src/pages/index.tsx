import { Flex, Box, Heading, Text, Grid, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import Image from 'next/image'
//import { Image } from "@chakra-ui/react"

//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './home.module.scss';
import { theme } from '../styles/theme';

import SwiperCore, {
  EffectFade, Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      pb="10"
    >
      <Header />

      <Flex bg="url('/images/home-banner.svg') no-repeat" w="100%" h={["163", "163", "335"]} backgroundSize="cover" pl={["4", "4", "140"]} pr={["4", "4", "140"]}>
        <Flex w={["100%", "100%", "50%"]} direction="column" gridGap="5" justifyContent="center">
          <Heading as="h1" size="lg" color="gray.50" fontWeight="500" display="flex" flexDirection="column">
            5 Continentes, <Box as="span">infinitas possibilidades. </Box>
          </Heading>

          <Text as="p" color="gray.200" maxW="450">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>

        </Flex>
        <Flex w="50%" alignItems="flex-end" justifyContent="flex-end" mb="-8" display={["none", "none", "unset"]}>
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

      <Box h="auto" w="100%" pl={["8", "8", "140"]} pr={["8", "8", "140"]} mt="20" mb="80px">
        <Grid templateColumns={["repeat(auto-fit, 140px)", "repeat(auto-fit, 140px)", "repeat(auto-fit, 158px)"]} justifyContent={["flex-start", "flex-start", "space-around"]} gap="20" h="100%">
          <Flex direction={["row", "row", "column"]} justifyContent={["inherit", "inherit", "space-between"]} alignItems="center" h="100%" gridGap={["20px", "20px", ""]}>
            <Box w="auto" display={["none", "none", "unset"]}>
              <Image
                src="/icons/cocktail.svg"
                alt="Coquetel/Drink"
                width={85}
                height={85}                
              />
            </Box>
            <Box> 
            <Image
                src="/icons/dot.svg"
                alt=""
                width={8}
                height={8}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              vida noturna
            </Text>

          </Flex>
          <Flex direction={["row", "row", "column"]} justifyContent={["inherit", "inherit", "space-between"]} alignItems="center" h="100%" gridGap={["20px", "20px", ""]}>
            <Box w="auto" display={["none", "none", "unset"]}>
              <Image
                src="/icons/surf.svg"
                alt="Prancha de surf e sol"
                width={85}
                height={85}
              />
            </Box>
            <Box> 
            <Image
                src="/icons/dot.svg"
                alt=""
                width={8}
                height={8}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              praia
            </Text>
          </Flex>
          <Flex direction={["row", "row", "column"]} justifyContent={["inherit", "inherit", "space-between"]} alignItems="center" h="100%" gridGap={["20px", "20px", ""]}>
            <Box w="auto" display={["none", "none", "unset"]}>
              <Image
                src="/icons/building.svg"
                alt="Edifício"
                width={85}
                height={85}
              />
            </Box>
            <Box> 
            <Image
                src="/icons/dot.svg"
                alt=""
                width={8}
                height={8}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              moderno
            </Text>
          </Flex>
          <Flex direction={["row", "row", "column"]} justifyContent={["inherit", "inherit", "space-between"]} alignItems="center" h="100%" gridGap={["20px", "20px", ""]}>
            <Box w="auto" display={["none", "none", "unset"]}>
              <Image
                src="/icons/museum.svg"
                alt="Museu"
                width={85}
                height={85}
              />
            </Box>
            <Box> 
            <Image
                src="/icons/dot.svg"
                alt=""
                width={8}
                height={8}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              clássico
            </Text>
          </Flex>
          <Flex direction={["row", "row", "column"]} justifyContent={["inherit", "inherit", "space-between"]} alignItems="center" h="100%" gridGap={["20px", "20px", ""]}>
            <Box w="auto" display={["none", "none", "unset"]}>
              <Image
                src="/icons/earth.svg"
                alt="Planeta terra"
                width={85}
                height={85}
              />
            </Box>
            <Box> 
            <Image
                src="/icons/dot.svg"
                alt=""
                width={8}
                height={8}
              />
            </Box>
            <Text as="p" color="gray.600" size="md" fontWeight="600">
              e mais...
            </Text>
          </Flex>
        </Grid>
      </Box>


      <Divider width="90px" border="2px solid" margin="0 auto" borderColor="gray.600" />

      <Heading as="h1" size="lg" color="gray.600" fontWeight="500" display="flex" flexDirection="column" textAlign="center" mt="52px" mb="52px">
        Vamos nessa? <Box as="span">Então escolha seu continente </Box>
      </Heading>

      <Box w={["100vw", "100vw", "85vw"]} margin="0 auto">
        <Swiper
          effect={'fade'}
          spaceBetween={0}
          slidesPerView={1}
          // navigation={{nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev'}}
          navigation={true}
          pagination={{
            clickable: true, renderBullet: function (index, className) {
              return `<span class='swiper-pagination-bullet ${styles.dots} ${className}'></span>`
            }
          }}
          scrollbar={{ draggable: true }}
        >
          {/* <Box className="swiper-button-next" color={theme.colors.highlight}></Box>
      <Box className="swiper-button-prev" color={theme.colors.highlight}></Box> */}

          <SwiperSlide>
            <Flex
              w="100%"
              h={["250px", "250px", "450px"]}
              bg="url('/images/europe.jpg') no-repeat center center"
              //bg="url('/images/europe.jpg')" 
              backgroundSize="cover"
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              {/* <Image
                src="/images/europe.jpg"
                alt="Europa"
                layout="fill"
                objectFit="cover"
              /> */}
              <Heading as="h1" color="white" fontWeight="700" fontSize="3xl">
                Europa
              </Heading>
              <Text as="p" color="white" fontWeight="700" fontSize="md">
                O continente mais antigo
              </Text>


            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h={["250px", "250px", "450px"]}
              bg="url('/images/asia.jpg') no-repeat center center"
              //bg="url('/images/asia.jpg')" 
              backgroundSize="cover"
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Heading as="h1" color="white" fontWeight="700" fontSize="3xl">
                Ásia
              </Heading>
              <Text as="p" color="white" fontWeight="700" fontSize="md">
                O maior continente
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h={["250px", "250px", "450px"]}
              bg="url('/images/america.jpg') no-repeat center center"
              //bg="url('/images/asia.jpg')" 
              backgroundSize="cover"
              alignItems="center"
              justifyContent="center"
              direction="column">
              <Heading as="h1" color="white" fontWeight="700" fontSize="3xl">
                América
              </Heading>
              <Text as="p" color="white" fontWeight="700" fontSize="md">
                O continente com a maior mata atlântica do mundo
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h={["250px", "250px", "450px"]}
              bg="url('/images/africa.jpg') no-repeat center center"
              //bg="url('/images/asia.jpg')" 
              backgroundSize="cover"
              alignItems="center"
              justifyContent="center"
              direction="column">
              <Heading as="h1" color="white" fontWeight="700" fontSize="3xl">
                África
              </Heading>
              <Text as="p" color="white" fontWeight="700" fontSize="md">
                Venha explorar esse continente
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h={["250px", "250px", "450px"]}
              bg="url('/images/oceania.jpg') no-repeat center center"
              //bg="url('/images/asia.jpg')" 
              backgroundSize="cover"
              alignItems="center"
              justifyContent="center"
              direction="column">
              <Heading as="h1" color="white" fontWeight="700" fontSize="3xl">
                Oceania
              </Heading>
              <Text as="p" color="white" fontWeight="700" fontSize="md">
                O continente de madagascar e modernidade
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>

    </Flex>
  )
}
