import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContainerTypes from './components/ContainerTypes';
import Glossary from './components/Glossary/Glossary';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ContainerTypes />
      <Glossary />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;