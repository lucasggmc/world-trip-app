import { Flex, Heading, Text, Box, Grid, Tooltip } from "@chakra-ui/react";
import { CityCard } from "../../components/Citycard";
import { Header } from "../../components/Header";
import { theme } from '../../styles/theme';
import { RiInformationLine } from 'react-icons/ri';
import { Icon } from '../../components/Icon';
import { useRouter } from "next/router";
import { useEffect } from 'react';


export default function Continents() {
    const router = useRouter();
    const { continent } = router.query;
    console.log('cont', continent);


    useEffect(() => {
        fetch('/api/citys')
        .then(res => res.json())
        .then(json => {
            console.log('cityssss', json.citys);
        })
    }, [])

    return (
        <Flex
            w="100%"
            h="100%"
            direction="column"
            pb="10"
        >
            <Header />
            <Flex
                bg="url('/images/europe2.jpg') no-repeat center center"
                backgroundSize="cover"
                w="100%"
                h={["150", "150", "300", "500"]}
                alignItems={["center", "center", "flex-end"]}
                justifyContent="flex-start"
                pl="140"
                pb={["0", "0", "20"]}
                mb="20"
            >
                <Heading as="h1" color="white" fontWeight="600">
                    Europa
                </Heading>
            </Flex>

            <Box as="main" pl={["4", "4", "20", "140"]} pr={["4", "4", "20", "140"]}>
                <Flex gridGap="70" flexDirection={["column", "column", "row"]}>
                    <Text as="p" w={["100%", "100%", "50%"]} fontSize="2xl" textAlign="justify">
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental
                        da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes
                        Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                    <Flex w={["100%", "100%", "50%"]} justifyContent="space-around" alignItems="center">
                        <Flex direction="column" alignItems="center" fontWeight="600">
                            <Box as="span" color={theme.colors.highlight} fontSize="5xl">
                                50
                            </Box>
                            <Text as="p">países</Text>
                        </Flex>

                        <Flex direction="column" alignItems="center" fontWeight="600">
                            <Box as="span" color={theme.colors.highlight} fontSize="5xl">
                                60
                            </Box>
                            <Text as="p">línguas</Text>
                        </Flex>

                        <Flex direction="column" alignItems="center" fontWeight="600">
                            <Box as="span" color={theme.colors.highlight} fontSize="5xl">
                                27
                            </Box>
                            <Flex alignItems="center" gridGap="1.5">
                                <Text as="p">
                                    cidades +100
                                </Text>
                                <Tooltip label="Essas cidades estão entre as 100+ visitadas do mundo">
                                    <Icon> 
                                        <RiInformationLine size={16} color={theme.colors.gray200}/>
                                    </Icon>                                    
                                </Tooltip>                                
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex direction="column" gridGap="10" mt="20">
                    <Heading as="h1" color="gray.600" fontWeight="500">
                        Cidades +100
                    </Heading>

                    <Grid templateColumns="repeat(auto-fit, 256px)" gridGap="20" justifyContent={["center", "center", "normal"]}>
                        <CityCard />
                        <CityCard />
                        <CityCard />
                        <CityCard />
                        <CityCard />
                    </Grid>

                </Flex>


            </Box>
        </Flex>
    );
}