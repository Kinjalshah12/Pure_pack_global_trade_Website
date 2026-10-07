import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import GlobalTrade from './components/GlobalTrade';
import Quality from './components/Quality';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSelectProductForQuote = (productName) => {
    setSelectedProduct(productName);
  };

  return (
    <div className="app-main-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onSelectProductForQuote={handleSelectProductForQuote} />
        <WhyChooseUs />
        <GlobalTrade />
        <Quality />
        <QuoteForm selectedProduct={selectedProduct} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
