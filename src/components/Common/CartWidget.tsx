import { Box, Badge, IconButton } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
  const navigate = useNavigate()
  const cartItemsCount = 0 // Replace with actual cart state

  return (
    <Box position="relative">
      <IconButton
        aria-label="Shopping cart"
        icon={<FiShoppingCart />}
        variant="ghost"
        onClick={() => navigate('/cart')}
      />
      {cartItemsCount > 0 && (
        <Badge
          position="absolute"
          top="-1"
          right="-1"
          colorScheme="red"
          borderRadius="full"
        >
          {cartItemsCount}
        </Badge>
      )}
    </Box>
  )
}

export default CartWidget 