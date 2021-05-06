import { Flex, Image } from "@chakra-ui/react";

import logo from '../../public/assets/logo.svg';

export function Header() {
  return (
    <Flex 
      flexDirection="row" 
      align="center" 
      justify="center" 
      h={["50px","100px"]}
      w="100%" 
      as="header" 
      mx="auto" 
      px="1rem" 
    >
      <Image 
        w={["81px","184px"]}
        src={logo} 
      />
    </Flex>
  )
}