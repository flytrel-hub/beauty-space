import React from 'react';
import SEO from '../../components/General/SEO/SEO';
import HeroSection from '../../components/Home/HeroSection/HeroSection';
import ServicesOverview from '../../components/Home/ServicesOverview/ServicesOverview';
import WhyUs from '../../components/Home/WhyUs/WhyUs';
import ContactBlock from '../../components/General/ContactBlock/ContactBlock';
import './Home.scss';

const Home = () => {
  return (
    <>
      <SEO 
        title="Главная"
        description="Профессиональный салон красоты с широким спектром услуг. Парикмахерские услуги, маникюр, педикюр, косметология и массаж в одном месте."
        keywords="салон красоты, парикмахерская, маникюр, педикюр, косметология, массаж, красота, уход за собой"
        canonicalUrl="https://beauty-salon.ru/"
      />
      <div className="home-page">
        <HeroSection />
        <ServicesOverview />
        <WhyUs />
        <ContactBlock />
      </div>
    </>
  );
};

export default Home;
