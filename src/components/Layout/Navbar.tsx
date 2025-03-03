import {
  Box,
  Flex,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Portal,
  useColorMode
} from '@chakra-ui/react'
import { 
  FiShoppingCart, 
  FiSearch, 
  FiUser, 
  FiMenu, 
  FiChevronDown,
  FiMonitor,
  FiShoppingBag,
  FiBook,
  FiMusic,
  FiHome,
  FiMoon,
  FiSun
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const categories = [
    { name: 'All Categories', icon: FiHome, path: '/' },
    { name: 'Electronics', icon: FiMonitor, path: '/category/electronics' },
    { name: 'Fashion', icon: FiShoppingBag, path: '/category/fashion' },
    { name: 'Books', icon: FiBook, path: '/category/books' },
    { name: 'Entertainment', icon: FiMusic, path: '/category/entertainment' },
  ]

  return (
    <Box bg="black.800" backdropFilter="blur(10px)" position="sticky" top={0} zIndex={1000}>
      <Container maxW="8xl">
        <Flex h={20} alignItems="center" justifyContent="space-between" gap={8}>
          <Stack direction="row" spacing={4} align="center">
            <Link to="/">
              <Text 
                fontSize="2xl" 
                fontWeight="bold" 
                bgGradient="linear(to-r, white, accent.200)"
                bgClip="text"
              >
                BLK
              </Text>
            </Link>

            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<FiChevronDown />}
                leftIcon={<FiMenu />}
                color="gray.300"
                _hover={{ bg: 'black.700' }}
                _active={{ bg: 'black.600' }}
              >
                Categories
              </MenuButton>
              <Portal>
                <MenuList 
                  bg="black.800" 
                  borderColor="black.600"
                  py={2}
                  shadow="xl"
                >
                  {categories.map((category) => (
                    <MenuItem
                      key={category.name}
                      as={Link}
                      to={category.path}
                      bg="black.800"
                      _hover={{ bg: 'black.700' }}
                      py={3}
                    >
                      <Stack direction="row" align="center" spacing={3}>
                        <Icon 
                          as={category.icon} 
                          color="accent.300" 
                          boxSize={5}
                        />
                        <Text color="gray.100">{category.name}</Text>
                      </Stack>
                    </MenuItem>
                  ))}
                </MenuList>
              </Portal>
            </Menu>
          </Stack>

          <InputGroup maxW="2xl">
            <Input 
              placeholder="Search products..."
              size="lg"
              bg="black.700"
              border="1px"
              borderColor="black.600"
              _hover={{ bg: 'black.600' }}
              _focus={{ bg: 'black.600', borderColor: 'accent.300' }}
            />
            <InputRightElement h="full">
              <IconButton
                aria-label="Search"
                icon={<FiSearch />}
                variant="ghost"
                color="gray.400"
                _hover={{ color: 'white' }}
              />
            </InputRightElement>
          </InputGroup>

          <Stack direction="row" spacing={3} align="center">
            <Link to="/cart">
              <IconButton
                aria-label="Shopping cart"
                icon={<FiShoppingCart />}
                variant="ghost"
                color="gray.400"
                _hover={{ color: 'white' }}
              />
            </Link>
            <Button
              leftIcon={<FiUser />}
              bg="accent.400"
              color="black.900"
              _hover={{ bg: 'accent.300' }}
            >
              Sign In
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar 