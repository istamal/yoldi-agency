import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

function Footer() {
  return (
    <Box as="footer" bg="white" color="gray.500" py={4} textAlign="center">
      <Text>Уже есть аккаунт? <Link style={{ color: "black", fontWeight: "600" }} href={"/login"}>Войти</Link></Text>
    </Box>
  )
}

export default Footer