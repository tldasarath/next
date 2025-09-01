// components/SEO.js
"use client"
import Head from "next/head";

export default function SEO({ 
  title, 
  description, 
  ogDescription, 
  twitterDescription,
  image, 
  url, 
  keywords,
  canonical,
  ogType = "website",
  twitterCard = "summary_large_image"
}) {
    console.log(title);
    
  const siteName = "Next Media";
  const siteTwitterHandle = "@YourTwitterHandle";
  
  // Use specific descriptions if provided, otherwise fall back to the general description
  const ogDesc = ogDescription || description;
  const twitterDesc = twitterDescription || description;
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title} | {siteName}</title>
      <meta name="title" content={`${title} | ${siteName}`} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Canonical URL for duplicate content prevention */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={ogDesc} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={siteTwitterHandle} />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={twitterDesc} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={`Image for ${title}`} />}
      
      {/* Additional optional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  );
}