import { Box, Container, Heading, Text, Stack, Button } from '@chakra-ui/react'
import ProductGrid from '../components/Product/ProductGrid'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <Box bg="black.900">
      <Box>
        {/* Hero Section */}
        <Box 
          bg="black.800" 
          py={20} 
          mb={12}
          borderBottom="1px"
          borderColor="black.700"
        >
          <Container maxW="7xl">
            <Stack spacing={8} align="center" textAlign="center">
              <Heading 
                fontSize={{ base: '4xl', md: '6xl' }}
                bgGradient="linear(to-r, white, accent.200)"
                bgClip="text"
                letterSpacing="tight"
              >
                Discover Premium Products
              </Heading>
              <Text 
                fontSize="xl" 
                color="gray.400"
                maxW="2xl"
              >
                Explore our curated collection of exclusive items from top brands and independent creators
              </Text>
              <Button
                rightIcon={<FiArrowRight />}
                size="lg"
                bg="accent.400"
                color="black.900"
                _hover={{ bg: 'accent.300' }}
              >
                Shop Now
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* Featured Products */}
        <Container maxW="7xl">
          <Stack spacing={12}>
            <Stack spacing={3}>
              <Text 
                color="accent.300" 
                fontWeight="semibold"
              >
                FEATURED PRODUCTS
              </Text>
              <Heading size="lg">Trending This Week</Heading>
            </Stack>
            <ProductGrid />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 