import { Box, VStack, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FiHome, FiShoppingBag, FiMonitor, FiBook, FiMusic } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const categories = [
    { name: 'Home', icon: FiHome, path: '/' },
    { name: 'Electronics', icon: FiMonitor, path: '/category/electronics' },
    { name: 'Fashion', icon: FiShoppingBag, path: '/category/fashion' },
    { name: 'Books', icon: FiBook, path: '/category/books' },
    { name: 'Entertainment', icon: FiMusic, path: '/category/entertainment' },
  ]

  return (
    <Box
      w="250px"
      h="100vh"
      bg="black.800"
      borderRight="1px"
      borderColor="black.700"
      py={8}
      position="fixed"
      left={0}
    >
      <VStack spacing={6} align="stretch">
        <Text 
          px={6} 
          fontSize="sm" 
          fontWeight="semibold"
          color="gray.400"
          letterSpacing="wider"
        >
          CATEGORIES
        </Text>
        <List spacing={1}>
          {categories.map((category) => (
            <ListItem key={category.name}>
              <Link to={category.path}>
                <Box
                  px={6}
                  py={3}
                  _hover={{ bg: 'black.700' }}
                  display="flex"
                  alignItems="center"
                  transition="all 0.2s"
                >
                  <ListIcon as={category.icon} color="gray.400" />
                  <Text color="gray.100">{category.name}</Text>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  )
}

export default Sidebar 