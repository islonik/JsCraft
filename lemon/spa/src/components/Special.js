// Special renders a single special.

import { Center, Box, HStack, VStack, Image } from "@chakra-ui/react";

const Special = ({ pic, dish, desc }) => {
    return (
        <Center>
            <VStack>
                <HStack>
                    <Image src={pic} alt={dish}/>
                </HStack>
                <HStack>
                    <div>
                        <h2>{dish}</h2>
                        <p>{desc}</p>
                    </div>
                </HStack>
            </VStack>
        </Center>
    );
}

export default Special;