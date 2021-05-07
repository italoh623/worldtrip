import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface featureProps {
  icon: string;
  text: String;
}

export function Feature({ icon, text }: featureProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
    >
      {isMobile ? (
        <Image
          src={`./assets/icons/${icon}.svg`}
          w={["60px","85px"]}
          h={["60px","85px"]}
          mb="6"
        />
      ) : (
        <Text
          color="yellow.300"
          fontSize="4xl"
          mr="2"
        >
          •
        </Text>
      )}

      <Text
        fontWeight="600"
        color="gray.900"
        fontSize={["md", "xl", "2xl"]}
      >
        {text}
      </Text>
    </Flex>
  )
}