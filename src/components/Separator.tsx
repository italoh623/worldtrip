import { Box } from "@chakra-ui/react";

export function Separator() {
  return (
    <Box 
      h="2px"
      w={["60px", "90px"]} 
      mx="auto" 
      my={["9","20"]}
      bg="gray.700"
    />
  )
}