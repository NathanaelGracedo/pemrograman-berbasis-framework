/**
 * Contoh Implementasi Google Analytics Event Tracking
 * 
 * File ini menunjukkan cara menggunakan Google Analytics tracking
 * di berbagai scenario
 */

import { trackEvent, trackLogin, trackFormSubmission } from '@/utils/googleAnalytics';

// ========================================
// 1. CONTOH: Track Button Click
// ========================================
export function ExampleButtonTracking() {
  const handleButtonClick = () => {
    trackEvent('button_click', {
      button_name: 'submit',
      page: 'contact-form',
    });
    // ... action lainnya
  };

  return (
    <button onClick={handleButtonClick}>
      Klik Saya
    </button>
  );
}

// ========================================
// 2. CONTOH: Track Form Submission
// ========================================
export function ExampleFormTracking() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmission('contact_form', {
      form_type: 'contact',
    });

    // Submit form...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nama" />
      <button type="submit">Kirim</button>
    </form>
  );
}

// ========================================
// 3. CONTOH: Track Login
// ========================================
export function ExampleLoginTracking() {
  const handleGoogleLogin = async () => {
    try {
      // Google login logic...
      
      // Track login
      trackLogin('google');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      // GitHub login logic...
      
      // Track login
      trackLogin('github');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <button onClick={handleGoogleLogin}>Login dengan Google</button>
      <button onClick={handleGithubLogin}>Login dengan GitHub</button>
    </>
  );
}

// ========================================
// 4. CONTOH: Track Link Click
// ========================================
export function ExampleLinkTracking() {
  const handleExternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = e.currentTarget.href;
    
    trackEvent('click', {
      event_category: 'outbound',
      event_label: url,
    });
  };

  return (
    <a 
      href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleExternalLinkClick}
    >
      Link Eksternal
    </a>
  );
}

// ========================================
// 5. CONTOH: Track Page View (Custom)
// ========================================
export function ExamplePageView() {
  React.useEffect(() => {
    trackEvent('page_view', {
      page_path: '/product/details',
      page_title: 'Product Details Page',
    });
  }, []);

  return <div>Halaman akan di-track</div>;
}

// ========================================
// 6. CONTOH: Track Scroll Depth
// ========================================
export function ExampleScrollDepth() {
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track setiap 25% scroll
      if (scrollPercent % 25 === 0) {
        trackEvent('scroll_depth', {
          event_label: `${scrollPercent}%`,
          scroll_percent: scrollPercent,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div style={{ height: '300vh' }}>Scroll page ini untuk tracking</div>;
}

// Jangan lupa import React jika menggunakannya
import React from 'react';
