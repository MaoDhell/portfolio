import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}

export default App