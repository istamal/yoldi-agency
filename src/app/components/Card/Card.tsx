import { Flex, Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

function Card({ heading, children}: { heading: string, children: ReactNode }) {
  return (
    <Flex flex="1" justify="center" align={{ base: "top", md: "center" }} bg={{ base: "white", md: "blackAlpha.100" }}>
      <Box
        h={{ base: "100%", md: "auto" }}
        w={{ base: "100%", md: "sm", lg: "sm" }}
        p={6}
        borderWidth={{ base: "none", md: 1 }}
        borderColor="gray.200"
        borderRadius={{ base: "none", md: "md" }}
        bg="white"
      >
        <Heading mb={6} fontSize="3xl" fontWeight="600" as="h2">
          {heading}
        </Heading>
        {children}
      </Box>
    </Flex>
  )
}

export default Card