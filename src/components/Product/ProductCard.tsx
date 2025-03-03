import {
  Box,
  Image,
  Text,
  Stack,
  Badge,
  Button,
  Flex
} from '@chakra-ui/react'
import { FiShoppingCart, FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  rating: number
}

const ProductCard = ({ id, name, price, image, rating }: ProductCardProps) => {
  return (
    <Box
      bg="black.800"
      borderRadius="2xl"
      overflow="hidden"
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'xl'
      }}
      border="1px"
      borderColor="black.700"
      height="full"
      display="flex"
      flexDirection="column"
    >
      <Link to={`/product/${id}`}>
        <Image 
          src={image} 
          alt={name}
          height="300px"
          width="100%"
          objectFit="cover"
        />
      </Link>

      <Box p={6} flex="1" display="flex" flexDirection="column">
        <Stack spacing={3} flex="1">
          <Flex justify="space-between" align="flex-start">
            <Text 
              fontSize="xl" 
              fontWeight="semibold" 
              noOfLines={2}
              color="gray.100"
              flex="1"
              mr={4}
            >
              {name}
            </Text>
            <Badge 
              display="flex" 
              alignItems="center" 
              bg="black.700"
              color="accent.300"
              fontSize="sm"
              px={2}
              py={1}
              borderRadius="full"
              flexShrink={0}
              h="fit-content"
            >
              <FiStar style={{ marginRight: '4px' }} />
              {rating}
            </Badge>
          </Flex>
          <Box flex="1" />
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            color="accent.300"
          >
            ${price.toFixed(2)}
          </Text>
          <Button
            leftIcon={<FiShoppingCart />}
            bg="accent.400"
            color="black.900"
            size="lg"
            _hover={{ bg: 'accent.300' }}
            w="full"
          >
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ProductCard 