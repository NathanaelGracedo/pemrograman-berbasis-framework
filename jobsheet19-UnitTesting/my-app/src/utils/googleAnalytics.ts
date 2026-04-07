/**
 * Google Analytics Event Tracking Utility
 * 
 * Gunakan file ini untuk tracking custom events di Google Analytics
 * 
 * Contoh penggunaan:
 * - trackEvent('button_click', { button_name: 'submit' })
 * - trackEvent('form_submission', { form_name: 'contact' })
 */

interface GAEvent {
  event: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Track custom event ke Google Analytics
 * @param eventName - Nama event (contoh: 'button_click', 'form_submit')
 * @param eventData - Data tambahan (opsional)
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventData);
  } else {
    console.warn('Google Analytics not loaded');
  }
};

/**
 * Track page scroll depth
 * @param scrollPercent - Persentase scroll (0-100)
 */
export const trackScrollDepth = (scrollPercent: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${scrollPercent}%`,
    value: scrollPercent,
  });
};

/**
 * Track external link clicks
 * @param url - External URL
 */
export const trackOutboundLink = (url: string) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: url,
  });
};

/**
 * Track form submissions
 * @param formName - Nama form
 * @param formData - Data form (opsional, jangan include sensitive data!)
 */
export const trackFormSubmission = (
  formName: string,
  formData?: Record<string, any>
) => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    ...formData,
  });
};

/**
 * Track video plays
 * @param videoTitle - Judul video
 */
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoTitle,
  });
};

/**
 * Track user login
 * @param method - Login method (google, github, email, etc)
 */
export const trackLogin = (method: string) => {
  trackEvent('login', {
    event_category: 'engagement',
    event_label: method,
  });
};

/**
 * Track file downloads
 * @param fileName - Nama file yang didownload
 * @param fileType - Tipe file (pdf, doc, zip, etc)
 */
export const trackFileDownload = (fileName: string, fileType?: string) => {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    file_type: fileType,
  });
};

/**
 * Track e-commerce: Add to cart
 * @param itemName - Nama produk
 * @param itemPrice - Harga produk
 * @param itemQuantity - Jumlah
 */
export const trackAddToCart = (
  itemName: string,
  itemPrice: number,
  itemQuantity: number = 1
) => {
  trackEvent('add_to_cart', {
    event_category: 'ecommerce',
    event_label: itemName,
    item_price: itemPrice,
    quantity: itemQuantity,
  });
};

/**
 * Track e-commerce: Purchase
 * @param transactionId - ID transaksi
 * @param totalValue - Total nilai transaksi
 */
export const trackPurchase = (transactionId: string, totalValue: number) => {
  trackEvent('purchase', {
    event_category: 'ecommerce',
    event_label: transactionId,
    transaction_id: transactionId,
    value: totalValue,
  });
};

// Type declaration untuk window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
