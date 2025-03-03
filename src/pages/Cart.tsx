import { 
  Box, 
  Container, 
  Heading, 
  Stack, 
  Button, 
  Text,
  Image,
  Flex,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiShoppingBag } from 'react-icons/fi'

const Cart = () => {
  const cartIsEmpty = true // Replace with actual cart state

  return (
    <Box bg="black.900" minH="calc(100vh - 160px)">
      <Container maxW="7xl" py={12}>
        <Stack spacing={12}>
          <Heading 
            size="2xl"
            bgGradient="linear(to-r, white, accent.200)"
            bgClip="text"
          >
            Your Cart
          </Heading>
          
          {cartIsEmpty ? (
            <Flex 
              direction="column" 
              align="center" 
              justify="center" 
              py={20}
              bg="black.800"
              borderRadius="2xl"
              border="1px"
              borderColor="black.700"
            >
              <Box 
                p={6} 
                borderRadius="full" 
                bg="black.700" 
                color="accent.300"
                mb={8}
              >
                <FiShoppingBag size={48} />
              </Box>
              <Stack spacing={6} align="center" maxW="md" textAlign="center">
                <Heading size="lg">Your cart is empty</Heading>
                <Text fontSize="lg" color="gray.400">
                  Looks like you haven't added anything to your cart yet.
                  Browse our products and find something you love.
                </Text>
                <Button
                  as={Link}
                  to="/"
                  leftIcon={<FiArrowLeft />}
                  bg="accent.400"
                  color="black.900"
                  size="lg"
                  _hover={{ bg: 'accent.300' }}
                  minW="200px"
                >
                  Start Shopping
                </Button>
              </Stack>
            </Flex>
          ) : (
            <Stack spacing={4}>
              {/* Cart items will go here */}
              <Divider />
              <Box textAlign="right">
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  Total: $0.00
                </Text>
                <Button colorScheme="blue" size="lg">
                  Proceed to Checkout
                </Button>
              </Box>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export default Cart 