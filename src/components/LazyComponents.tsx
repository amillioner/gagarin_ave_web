import { lazy } from 'react';

// Lazy load heavy components
export const LazyGallerySection = lazy(() => import('./GallerySection'));
export const LazyAmenitiesSection = lazy(() => import('./AmenitiesSection'));
export const LazySitePlanSection = lazy(() => import('./SitePlanSection'));
export const LazyLocationSection = lazy(() => import('./LocationSection'));
export const LazyFooter = lazy(() => import('./Footer'));

// Lazy load dialog components
export const LazyContactDialog = lazy(() => import('./ContactDialog'));
export const LazyInquiryForm = lazy(() => import('./InquiryForm'));
