import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from 'react';


interface ContinentImageProps {
    continentId: number;
    continentName: string;
}

type Continent = {
    id: number;
    image: string;
}

export function ContinentImage({ continentId, continentName }: ContinentImageProps){
    const [ continent, setContinent] = useState<Continent>();

    useEffect(() => {
        fetch(`/api/continents/${continentId}`)
        .then(res => res.json())
        .then(json => {              
            setContinent(json?.continents)          
        })
    }, [])

    function capitalizeFirstLetter(name: string){
        return name?.charAt(0).toUpperCase() + name?.slice(1);
    }

    return(
        <Flex
                bg={`url('${continent?.image}') no-repeat center center`}
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
                    {capitalizeFirstLetter(continentName)}                    
                </Heading>
            </Flex>
    );
}