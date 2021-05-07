import { Flex, Link, Heading, Text } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface CarouselProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export function Carousel({ continents }: CarouselProps) {
  return (
    <Flex
      w="100%"
      maxW="1500px"
      h={["250px", "450px"]}
      mx="auto"
      px={["2", "4", "8", "16"]}
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map(continent => (

          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('assets/continents/${continent.image}.jpg')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold{continent.title}"
                >
                  {continent.title}
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  {continent.summary}
                </Text>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
