import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Stack, 
  Grid, 
  Icon,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { 
  FiUsers, 
  FiTarget, 
  FiTrendingUp, 
  FiCheck 
} from 'react-icons/fi'

const About = () => {
  return (
    <Box bg="black.900" minH="calc(100vh - 160px)">
      <Container maxW="7xl" py={12}>
        <Stack spacing={12}>
          <Stack spacing={6} textAlign="center" maxW="3xl" mx="auto">
            <Heading 
              size="2xl"
              bgGradient="linear(to-r, white, accent.200)"
              bgClip="text"
            >
              Our Mission
            </Heading>
            <Text fontSize="xl" color="gray.400">
              Creating a moral alternative to major brands by building a centralized, 
              community-driven marketplace dedicated to Black-owned businesses.
            </Text>
          </Stack>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
            <Box 
              bg="black.800" 
              p={8} 
              borderRadius="2xl"
              border="1px"
              borderColor="black.700"
            >
              <Stack spacing={6}>
                <Icon as={FiTarget} boxSize={8} color="accent.300" />
                <Heading size="lg">The Challenge</Heading>
                <List spacing={4} color="gray.400">
                  <ListItem display="flex">
                    <ListIcon as={FiCheck} color="accent.300" mt={1} />
                    Lack of representation and moral alternatives to major brands
                  </ListItem>
                  <ListItem display="flex">
                    <ListIcon as={FiCheck} color="accent.300" mt={1} />
                    Need for centralized resources and quality products
                  </ListItem>
                  <ListItem display="flex">
                    <ListIcon as={FiCheck} color="accent.300" mt={1} />
                    Limited opportunities for community stakeholdership
                  </ListItem>
                </List>
              </Stack>
            </Box>

            <Box 
              bg="black.800" 
              p={8} 
              borderRadius="2xl"
              border="1px"
              borderColor="black.700"
            >
              <Stack spacing={6}>
                <Icon as={FiTrendingUp} boxSize={8} color="accent.300" />
                <Heading size="lg">Our Solution</Heading>
                <List spacing={4} color="gray.400">
                  <ListItem display="flex">
                    <ListIcon as={FiCheck} color="accent.300" mt={1} />
                    US-founded digital marketplace exclusively for Black-owned businesses
                  </ListItem>
                  <ListItem display="flex">
                    <ListIcon as={FiCheck} color="accent.300" mt={1} />
                    Platform for ethically crafted, high-quality products
                  </ListItem>
                  <ListItem display="flex">
                    <ListIcon as={FiCheck} color="accent.300" mt={1} />
                    Community-driven approach with stakeholder opportunities
                  </ListItem>
                </List>
              </Stack>
            </Box>
          </Grid>

          <Box 
            bg="black.800" 
            p={8} 
            borderRadius="2xl"
            border="1px"
            borderColor="black.700"
          >
            <Stack spacing={6}>
              <Icon as={FiUsers} boxSize={8} color="accent.300" />
              <Heading size="lg">Our Impact</Heading>
              <Text color="gray.400">
                BLK Marketplace is more than just a platform - it's a movement towards economic 
                empowerment and authentic representation. By connecting consumers directly with 
                Black-owned businesses, we're creating opportunities for sustainable growth, 
                quality assurance, and wealth building within our community. Our vision extends 
                to supporting all people of color (POC), fostering an inclusive ecosystem where 
                ethical business practices and community development go hand in hand.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default About 