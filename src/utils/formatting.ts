// Utility functions for formatting data

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format based on length
  if (cleaned.length === 12 && cleaned.startsWith('998')) {
    // Uzbekistan format: +998 XX XXX-XX-XX
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)}-${cleaned.slice(8, 10)}-${cleaned.slice(10)}`;
  }
  
  if (cleaned.length === 11 && cleaned.startsWith('998')) {
    // Uzbekistan format without country code: 998 XX XXX-XX-XX
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)}-${cleaned.slice(8, 10)}-${cleaned.slice(10)}`;
  }
  
  // Default formatting
  return phone;
};

export const formatPrice = (price: string, currency: 'UZS' | 'USD' = 'UZS'): string => {
  const numericValue = parseFloat(price.replace(/[^\d.]/g, ''));
  
  if (isNaN(numericValue)) return price;
  
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericValue);
  }
  
  // UZS formatting
  if (numericValue >= 1000000000) {
    return `UZS ${(numericValue / 1000000000).toFixed(1)}B`;
  } else if (numericValue >= 1000000) {
    return `UZS ${(numericValue / 1000000).toFixed(1)}M`;
  } else if (numericValue >= 1000) {
    return `UZS ${(numericValue / 1000).toFixed(1)}K`;
  }
  
  return `UZS ${numericValue.toLocaleString()}`;
};

export const formatArea = (area: string): string => {
  const numericValue = parseFloat(area.replace(/[^\d.]/g, ''));
  
  if (isNaN(numericValue)) return area;
  
  return `${numericValue.toFixed(2)} м²`;
};

export const formatDate = (date: Date | string, locale: string = 'en-US'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
};

export const formatTime = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} Mins`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} Hour${hours > 1 ? 's' : ''}`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export const capitalizeFirst = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
