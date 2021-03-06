import { Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { City } from "./City";

export function Cities() {
  return (
    <Flex
      direction="column"
    >
      <Heading
        fontSize={["2xl","4xl"]}
        fontWeight="500"
        mb={["5", "10"]}
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City />
        <City />
        <City />
        <City />
        <City />
      </Grid>
    </Flex>
  )
}