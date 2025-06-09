import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}) => {
  const siteTitle = 'Beauty Salon';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Профессиональный салон красоты с широким спектром услуг';
  const defaultKeywords = 'салон красоты, парикмахерская, маникюр, педикюр, косметология, массаж';

  return (
    <Helmet>
      {/* Основные мета-теги */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Канонический URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Дополнительные мета-теги */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#FF69B4" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Russian" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Beauty Salon" />
    </Helmet>
  );
};

export default SEO; 