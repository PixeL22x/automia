import Head from 'next/head'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Automia - Consultoría en Inteligencia Artificial para Pequeñas Empresas</title>
        <meta name="description" content="Transforma tu pequeña empresa con soluciones de IA personalizadas. Automatización, análisis de datos y optimización de procesos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

