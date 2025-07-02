import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

// Declare gtag function type
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId = 'G-XXXXXXXXXX' // Replace with your actual GA4 measurement ID
}) => {
  useEffect(() => {
    // Only load GA in production
    if (import.meta.env.PROD && measurementId !== 'G-XXXXXXXXXX') {
      // Load Google Analytics
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      `;
      document.head.appendChild(script2);

      // Track page views on route changes
      const handleRouteChange = () => {
        if (window.gtag) {
          window.gtag('config', measurementId, {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        }
      };

      // Listen for hash changes (since we're using HashRouter)
      window.addEventListener('hashchange', handleRouteChange);

      return () => {
        // Cleanup
        if (document.head.contains(script1)) {
          document.head.removeChild(script1);
        }
        if (document.head.contains(script2)) {
          document.head.removeChild(script2);
        }
        window.removeEventListener('hashchange', handleRouteChange);
      };
    }
  }, [measurementId]);

  // Return null since this is just for side effects
  return null;
};

export default GoogleAnalytics; 