import { useState, useCallback } from 'react';
import { FORM_CONFIG } from '@/config/constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  consent?: string;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback((name: keyof FormData, value: string | boolean): string | undefined => {
    const config = FORM_CONFIG.validation[name as keyof typeof FORM_CONFIG.validation];
    
    if (!config) return undefined;

    if (typeof value === 'boolean') {
      if (name === 'consent' && !value) {
        return 'Consent is required';
      }
      return undefined;
    }

    if (config.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === 'name' && 'minLength' in config && value.length < config.minLength) {
      return `Name must be at least ${config.minLength} characters`;
    }

    if (name === 'name' && 'maxLength' in config && value.length > config.maxLength) {
      return `Name must be less than ${config.maxLength} characters`;
    }

    if (name === 'email' && 'pattern' in config && !config.pattern.test(value)) {
      return 'Please enter a valid email address';
    }

    if (name === 'phone' && 'pattern' in config && !config.pattern.test(value)) {
      return 'Please enter a valid phone number';
    }

    return undefined;
  }, []);

  const validateForm = useCallback((formData: FormData): boolean => {
    const newErrors: ValidationErrors = {};

    // Validate each field
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [validateField]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const setFieldError = useCallback((field: keyof FormData, error: string) => {
    setErrors(prev => ({ ...prev, [field]: error }));
  }, []);

  const clearFieldError = useCallback((field: keyof FormData) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    clearErrors,
    setFieldError,
    clearFieldError,
  };
};
