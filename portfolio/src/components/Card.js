import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack alignItems="start" className="card">
      <Image className="image" src={imageSrc} alt={title}/>
      <Heading as='h4' size='md' className="title">{title}</Heading>
      <Text className="desc">{description}</Text>
      <HStack className="see">
        <Text >See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
