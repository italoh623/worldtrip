import { Flex, Text } from "@chakra-ui/react";

export function Call() {
  return (
    <Flex
      justify="center"
      align="center"
      textAlign="center"
      mb={["5", "14"]}
    >
      <Text
        fontSize={["lg", "3xl", "4xl"]}
        fontWeight="500"
        color="gray.900"
      >
        Vamos nessa?<br />Então escolha seu continente
      </Text>
    </Flex>
  )
}