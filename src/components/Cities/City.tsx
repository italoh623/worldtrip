import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import img from '../../../public/assets/continents/europa.jpg'
import flag from '../../../public/assets/flag.png'

export function City() {
  return (
    <Box
      borderRadius="4px"
      overflow="hidden"
    >
      <Image src={img} h="170px" w="100%" />
      <Flex
        bg="white"
        p="6"
        align="center"
        justify="space-between"
        border="1px"
        borderTop="0"
        borderColor="yellow.300"
        borderBottomRadius="4px"
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
        >
          <Heading fontSize="xl" fontWeight="500">Londres</Heading>
          <Text mt="3" fontSize="md" color="gray.600" fontWeight="500">Reino Unido</Text>
        </Flex>
        <Image
          src={flag}
          h="30px"
          w="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}