// Validation utility functions

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Check if it's a valid international phone number (7-15 digits)
  return cleaned.length >= 7 && cleaned.length <= 15;
};

export const isValidName = (name: string): boolean => {
  // Name should be at least 2 characters, contain only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
  return nameRegex.test(name.trim());
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
};

export const validateFormData = (data: Record<string, any>): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  // Validate name
  if (data.name && !isValidName(data.name)) {
    errors.name = 'Please enter a valid name (2-50 characters, letters only)';
  }
  
  // Validate email
  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate phone
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  // Validate consent
  if (data.consent !== true) {
    errors.consent = 'You must agree to the terms and conditions';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
