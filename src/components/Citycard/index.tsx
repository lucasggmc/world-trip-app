import { Flex, Box, Heading, Text } from "@chakra-ui/react";


interface CityProps {
    id: number;
    continentId: number;
    name: string;
    country: string;
    image: string;
}

export function CityCard(city: CityProps){
    return(
        <Flex direction="column" h="279">
            <Box bg={`url('${city.image}') no-repeat center center`} backgroundSize="cover" h="173" w="100%" borderTopRadius="4px">
                
            </Box>

            <Flex justifyContent="space-between" alignItems="center" pl="6" pr="6" h="106" border="1px solid rgba(255, 186, 8, 0.5)" borderBottomRadius="4px">
                <Flex direction="column" gridGap="3">
                    <Heading as="h2" fontSize="xl" fontWeight="600">
                        {city.name}
                    </Heading>
                    <Text as="p" color="gray.400" fontSize="sm" >
                        {city.country}
                    </Text>
                </Flex>
                <Box borderRadius="100%" h="30px" w="30px" bg="url('/icons/united-kingdom.png') no-repeat center center" >

                </Box>
            </Flex>

        </Flex>
    )
}