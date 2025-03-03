import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import theme from './styles/theme'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  )
}

export default App 