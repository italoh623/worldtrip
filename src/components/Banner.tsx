import { Flex, Image, Text, Heading } from "@chakra-ui/react";

import airplane from '../../public/assets/airplane.svg';

export function Banner() {
  return (
    <Flex 
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/assets/banner.svg')"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex 
        justify={['center', 'space-between']} 
        align="center"
        w="100%"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading 
            color="gray.200" 
            fontWeight="500" 
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            5 Continentes,<br/>infinitas possibilidades.
          </Heading>
          <Text 
            color="gray.300" 
            mt="5" 
            fontSize={["0.8rem","xl"]} 
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </div>
        <Image 
          w={["300px", "300px", "300px", "430px"]}
          display={['none', 'none', 'block']} 
          src={airplane} 
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  )
}