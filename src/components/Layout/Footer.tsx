import { Box, Container, Stack, Text, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Box bg="black.800" color="gray.400" mt={10} borderTop="1px" borderColor="black.700">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold" color="white">About</Text>
            <Stack>
              <ChakraLink as={RouterLink} to="/about">About Us</ChakraLink>
              <ChakraLink as={RouterLink} to="/careers">Careers</ChakraLink>
              <ChakraLink as={RouterLink} to="/press">Press</ChakraLink>
            </Stack>
          </Stack>
          
          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">Support</Text>
            <Stack>
              <ChakraLink>Help Center</ChakraLink>
              <ChakraLink>Safety Center</ChakraLink>
              <ChakraLink>Community Guidelines</ChakraLink>
            </Stack>
          </Stack>

          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">Legal</Text>
            <Stack>
              <ChakraLink>Cookies Policy</ChakraLink>
              <ChakraLink>Privacy Policy</ChakraLink>
              <ChakraLink>Terms of Service</ChakraLink>
            </Stack>
          </Stack>

          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">Install App</Text>
            <Stack>
              <ChakraLink>iOS App</ChakraLink>
              <ChakraLink>Android App</ChakraLink>
              <ChakraLink>Desktop App</ChakraLink>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Text pt={10} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} BLK Marketplace. All rights reserved
        </Text>
      </Container>
    </Box>
  )
}

export default Footer 