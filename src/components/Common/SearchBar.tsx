import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic
  }

  return (
    <form onSubmit={handleSearch}>
      <InputGroup size="lg">
        <Input
          placeholder="Search products..."
          borderRadius="full"
          bg="white"
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<FiSearch />}
            borderRadius="full"
            type="submit"
          />
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default SearchBar 