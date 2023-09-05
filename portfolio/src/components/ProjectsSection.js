import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    key: 1,
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getPreview: () => require("../images/photo1_preview.jpg"),
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    key: 2,
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getPreview: () => require("../images/photo2_preview.jpg"),
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    key: 3,
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getPreview: () => require("../images/photo3_preview.jpg"),
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    key: 4,
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getPreview: () => require("../images/photo4_preview.jpg"),
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={24}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" >
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.key}
            title={project.title}
            description={project.description}
            preview={project.getPreview()}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
