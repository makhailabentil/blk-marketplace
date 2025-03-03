import { Box, Container, Grid, Image, Heading, Text, Button, Stack, Badge } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()

  return (
    <Container maxW="7xl" py={8}>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
        <Box>
          <Image
            src="https://placeholder.com/600"
            alt="Product"
            borderRadius="lg"
          />
        </Box>
        
        <Stack spacing={4}>
          <Heading>Product Name</Heading>
          <Badge colorScheme="green" alignSelf="start">
            In Stock
          </Badge>
          <Text fontSize="3xl" fontWeight="bold" color="blue.500">
            $199.99
          </Text>
          <Text color="gray.600">
            Detailed product description goes here...
          </Text>
          <Button colorScheme="blue" size="lg">
            Add to Cart
          </Button>
        </Stack>
      </Grid>
    </Container>
  )
}

export default ProductDetails 