import { Grid, Heading, Flex, Text } from "@chakra-ui/react";


export function Infos() {
  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Flex
        direction="column"
        align={["flex-start","center"]}
        justify="center"
      >
        <Heading
          color="yellow.300"
          fontSize={["1.75rem","5xl"]}
          fontWeight="600"
        >
          50
        </Heading>
        <Text
          textAlign={["center","left"]}
          fontSize={["1rem","2xl"]}
          color="gray.700"
          fontWeight="600"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        align={["flex-start","center"]}
        justify="center"
      >
        <Heading
          color="yellow.300"
          fontSize={["1.75rem","5xl"]}
          fontWeight="600"
        >
        60
        </Heading>
        <Text
          textAlign={["center","left"]}
          fontSize={["1rem","2xl"]}
          color="gray.700"
          fontWeight="600"
        >
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        align={["flex-start","center"]}
        justify="center"
      >
        <Heading
          color="yellow.300"
          fontSize={["1.75rem","5xl"]}
          fontWeight="600"
        >
          27
        </Heading>
        <Text
          textAlign={["center","left"]}
          fontSize={["1rem","2xl"]}
          color="gray.700"
          fontWeight="600"
        >
          cidades
        </Text>
      </Flex>
    </Grid>
  )
}