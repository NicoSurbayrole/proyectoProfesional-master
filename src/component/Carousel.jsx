import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Carousel = () => {
  const [slider, setSlider] = React.useState("");
  //   <Slider | null>
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const cards = [
    {
      title: "Palermo",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://d1994bulhovht.cloudfront.net/856x440/listings/96be6999-ecd1-40a2-b0ec-94a4d4ffe684/c0b95414-c711-4177-8269-41fc675a807c.webp",
    },
    {
      title: "Belgrano",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://d1994bulhovht.cloudfront.net/856x440/listings/674a154a-6f02-4da7-878e-c00779237b99/6fe42e7d-afd8-4d52-adc9-4e125832d05e.webp",
    },
    {
      title: "Pilar",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://static.tokkobroker.com/pictures/49099724534626044400367734755567403599230183764560633767332965674932105893414.jpg",
    },
    {
      title: "Martinez",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://d1994bulhovht.cloudfront.net/856x440/listings/c71d194e-08c8-4af9-a29e-b170c8dd1fd7/31055cb0-3f92-4ef8-a6c4-7b9708e259e2.webp",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards?.map((card, index) => (
          <Box
            key={index}
            height={"xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  borderRadius="xl"
                  backdropFilter="auto"
                  backdropBlur='8px'
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  position="relative"
                >
                  <Text align="center">{card.title}</Text>
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="black"
                  fontWeight="bold"
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
