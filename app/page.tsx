import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import StoneWork from '@/components/StoneWork'
import WoodWork from '@/components/WoodWork'
import Workshop from '@/components/Workshop'
import About from '@/components/About'
import Pricelist from '@/components/Pricelist'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <StoneWork />
        <WoodWork />
        <Workshop />
        <About />
        <Pricelist />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
