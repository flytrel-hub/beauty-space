import React from 'react';
import SEO from '../../components/General/SEO/SEO';
import Timeline from '../../components/About/Timeline/Timeline';
import TeamMemberCard from '../../components/About/TeamMemberCard/TeamMemberCard';
import CertificateGallery from '../../components/About/CertificateGallery/CertificateGallery';
import SalonGallery from '../../components/About/SalonGallery/SalonGallery';
import { salonHistory } from '../../data/history';
import { teamMembers } from '../../data/team';
import { certificates } from '../../data/achievements';
import { salonPhotos } from '../../data/gallery';
import './About.scss';

const About = () => {
  return (
    <>
      <SEO 
        title="О нас"
        description="Узнайте больше о нашем салоне красоты: история, команда профессионалов, сертификаты и фотографии салона. Мы работаем для вашей красоты с 2010 года."
        keywords="о салоне красоты, история салона, команда салона красоты, сертификаты, фотографии салона"
        canonicalUrl="https://beauty-salon.ru/about"
      />
      <div className="about-page">
        <div className="about-hero" 
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/hero/about.jpg'})`
          }}
        >
          <h1>О нашем салоне</h1>
          <p>Мы создаем красоту и комфорт с 2010 года</p>
        </div>

        <section className="about-section">
          <div className="about-content">
            <h2>История салона</h2>
            <p className="section-description">
              За годы работы мы прошли путь от небольшого салона до современного центра красоты,
              оснащенного передовым оборудованием и укомплектованного высококвалифицированными
              специалистами.
            </p>
            <Timeline events={salonHistory} />
          </div>
        </section>

        <section className="about-section team-section">
          <div className="about-content">
            <h2>Наша команда</h2>
            <p className="section-description">
              Познакомьтесь с нашими талантливыми мастерами, которые помогут вам достичь желаемого
              результата.
            </p>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        <section className="about-section certificates-section">
          <div className="about-content">
            <h2>Сертификаты и достижения</h2>
            <p className="section-description">
              Мы гордимся квалификацией наших мастеров и признанием в индустрии красоты.
            </p>
            <CertificateGallery certificates={certificates} />
          </div>
        </section>

        <section className="about-section gallery-section">
          <div className="about-content">
            <h2>Фотогалерея салона</h2>
            <p className="section-description">
              Посмотрите, как выглядит наш салон, и окунитесь в атмосферу красоты и уюта.
            </p>
            <SalonGallery photos={salonPhotos} />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
