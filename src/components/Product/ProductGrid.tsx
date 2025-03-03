import { SimpleGrid, Box } from '@chakra-ui/react'
import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
}

const ProductGrid = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      rating: 4.8,
    },
    {
      id: '2',
      name: 'Smart Watch Series X',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      rating: 4.6,
    },
    // Add more products as needed
  ]

  return (
    <Box mx="auto">
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
        spacing={8}
        py={8}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProductGrid 