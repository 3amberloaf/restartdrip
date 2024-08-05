import React, { useEffect } from 'react';
import './App.css'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import VitaminTherapy from './pages/vitaminivtherapy';
import HomePage from './pages/HomePage'; 
import About from './pages/About';
import Dehydration from './pages/treatments/dehydration';
import Energy from './pages/treatments/energy';
import Athlete from './pages/treatments/athlete';
import Beauty from './pages/treatments/beauty';
import Migraine from './pages/treatments/migraine';
import Fat from './pages/treatments/fat';
import Myers from './pages/treatments/myers';
import Immune from './pages/treatments/immune';
import Hangover from './pages/treatments/hangover';
import IVTherapy from './components/IVTherapy';
import Injections from './pages/injections_page';
import Specialty from './pages/NAD';
import ContactForm from './pages/contact';
import Pricing from './pages/pricing';
import IntroOffer from './pages/introOffer';
import Header from './pages/homepage/header';
import Footer from './pages/homepage/footer';
import NAD from './pages/NAD';

const App = () => {
 
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Show the pop-up discount when the component mounts
   
  }, [location]);

  return (
    <div className="App">
     
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/contact" element= {<ContactForm />} /> 
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<IVTherapy />} />
          <Route path="/vitaminivtherapy" element={<VitaminTherapy />} />
          <Route path="/injections" element={<Injections />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services/dehydration" element={<Dehydration />} />
          <Route path="/services/energy-boost" element={<Energy />} />
          <Route path="/services/athlete" element={<Athlete />} />
          <Route path="/services/beauty" element={<Beauty />} />
          <Route path="/services/migraine" element={<Migraine />} />
          <Route path="/services/immune-boost" element={<Immune />} />
          <Route path="/services/myers-cocktail" element={<Myers />} />
          <Route path="/services/fatburner" element={<Fat />} />
          <Route path="/services/hangover" element={<Hangover />} />
          <Route path= "/intro-offers" element={<IntroOffer />} />
          <Route path= "/pricing" element={<Pricing />} />
          <Route path= "/services/NAD+" element={<NAD />} />
        </Routes>
      </main>
      <Footer />
      
    </div>
  );
};

export default App;
