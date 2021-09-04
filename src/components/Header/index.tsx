import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";

export function Header() {
    const router = useRouter();
    
    return (
        <Flex
            w="100%"
            bg="gray.50"
            h="100"
            justifyContent="center"
            alignItems="center"
        >

            {router.asPath != "/" && (
                <Box position="absolute" left="5%">
                    <Link href="/" passHref>
                        <a>
                            <Image
                                src="/icons/arrow-left.svg"
                                alt="Logo"
                                width={8}
                                height={16}
                            />
                        </a>
                    </Link>
                </Box>
            )}


            <Link href="/" passHref>
                <a>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={184}
                        height={46}
                    />
                </a>
            </Link>

        </Flex>
    );
}