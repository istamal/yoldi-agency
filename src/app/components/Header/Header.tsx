import { Box, Flex, Button } from '@chakra-ui/react';
import Image from 'next/image';

function Header() {
  return (
    <Flex position="fixed" width="100%" zIndex={{ base: 2000, md: 1000 }} as="header" bg="white" color="gray.500" py={4} px={5} justify="space-between" align="center">
      <Flex justify="space-between" align="center">
        <Box pr="5">
          <Image alt="logo" src="/logo-wrapper.png" width={80} height={50}/>
        </Box>
        <Box
          color="black"
          width="60"
          display={{ base: "none", md: "block" }}
        >Разрабатываем и запускаем сложные веб проекты</Box>
      </Flex>
      <Button variant='outline'>Войти</Button>
    </Flex>
  )
}

export default Header