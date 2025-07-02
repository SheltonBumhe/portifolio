import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = "Shelton Bumhe - Software Developer & Data Scientist | Portfolio",
  description = "Shelton Bumhe is a Software Developer and Data Scientist specializing in AI, machine learning, and web development. View my portfolio, projects, and professional experience.",
  keywords = "Shelton Bumhe, software developer, data scientist, AI engineer, machine learning, web development, portfolio, React, Python, Java, SQL, Nebraska, University of Nebraska",
  image = "https://sheltonbumhe.com/og-image.png",
  url = "https://sheltonbumhe.com",
  type = "website",
  author = "Shelton Bumhe",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://sheltonbumhe.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://sheltonbumhe.com${image}`;

  useEffect(() => {
    // Update page title for better UX
    document.title = title;
    
    // Add structured data for rich snippets
    const structuredData: any = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebPage',
      "name": title,
      "description": description,
      "url": fullUrl,
      "image": fullImageUrl,
      "author": {
        "@type": "Person",
        "name": author,
        "url": "https://sheltonbumhe.com"
      },
      "publisher": {
        "@type": "Person",
        "name": author,
        "url": "https://sheltonbumhe.com"
      },
      "mainEntity": {
        "@type": "Person",
        "name": "Shelton Bumhe",
        "jobTitle": "Software Developer & Data Scientist",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "University of Nebraska"
        },
        "knowsAbout": [
          "Software Development",
          "Data Science",
          "Machine Learning",
          "Artificial Intelligence",
          "Web Development",
          "Python",
          "Java",
          "React",
          "SQL"
        ]
      }
    };

    if (publishedTime) {
      structuredData.publishedTime = publishedTime;
    }
    if (modifiedTime) {
      structuredData.modifiedTime = modifiedTime;
    }
    if (section) {
      structuredData.articleSection = section;
    }
    if (tags.length > 0) {
      structuredData.keywords = tags.join(', ');
    }

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [title, description, fullUrl, fullImageUrl, type, author, publishedTime, modifiedTime, section, tags]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Shelton Bumhe Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@sheltonbumhe" />
      <meta name="twitter:site" content="@sheltonbumhe" />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="shelton-bumhe" />
      <meta property="linkedin:url" content={fullUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};

export default SEO; 