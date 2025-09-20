import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Banner from './component/Banner';
import Menu from './component/Menu';
import WhyUs from './component/WhyUs';
import CoffeeBanner from './component/CoffeeBanner';
import Customer from './component/Customer';
import NewsLetter from './component/NewsLetter';




const App = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
        <Banner />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="about">
        <WhyUs />
        <CoffeeBanner />
        <Customer />
      </section>
      <section id="contact">
        <NewsLetter />
      </section>
 
    </div>
  );
}

export default App;
