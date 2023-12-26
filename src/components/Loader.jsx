import { Box, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
      <Box transform={"scale(2)"}>
        <Spinner 
        thickness='3px'
        speed='0.65s'
        emptyColor='gray.200'
        size={"xl"} 
        />
        
      </Box>
    </VStack>
  )
}

export default Loader
