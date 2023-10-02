// About (the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it)

import about1 from '../assets/img/about_1.jpg';
import about2 from '../assets/img/about_2.jpg';

import { Center, HStack, VStack, Image } from "@chakra-ui/react";

function About() {
    return (
        <Center>
            <HStack>
                <VStack>
                    <Image htmlHeight='450px' htmlWidth='450px' src={about1} alt='Mirka'/>
                </VStack>
                <VStack>
                <div id="about">
                    <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                    <br/>
                    <p>Little Lemon is owned by two Italian sisters, Mirka and Isabella, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mirka relies on family recipes and his experience as a chef in Italy. Isabella does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                </div>
                </VStack>
                <VStack>
                    <Image htmlHeight='450px' htmlWidth='450px' src={about2} alt='Isabella'/>
                </VStack>
            </HStack>
        </Center>
    );
}

export default About;