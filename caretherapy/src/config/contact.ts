/**
 * Centralized Contact Information Configuration
 *
 * This file contains all contact details for CARE Therapy.
 * Update this single file to change contact information across the entire site.
 */

export const CONTACT_INFO = {
  phone: {
    display: '+27 79 790 8846',
    href: 'tel:+27797908846',
  },
  email: {
    display: 'caretherapysa@gmail.com',
    href: 'mailto:caretherapysa@gmail.com',
  },
  serviceArea: {
    short: 'Val de Vie Estate, Paarl & surrounding areas',
    full: 'Mobile service available throughout Val de Vie Estate, Paarl & surrounding areas',
  },
  address: {
    display: 'Polo Village Offices B107, Val de Vie Estate, Paarl',
    mapUrl: 'https://maps.google.com/?q=Polo+Village+Offices+B107,+Val+de+Vie+Estate,+Paarl',
  },
  businessHours: {
    weekdays: 'Monday - Friday: 7:00 AM - 7:00 PM',
    saturday: 'Saturday: 8:00 AM - 2:00 PM',
    sunday: 'Sunday: Closed',
  },
  social: {
    instagram: 'https://www.instagram.com/care_therapy_sa/',
    linkedin: 'https://www.linkedin.com/company/care-therapy-centre-for-adaptive-rehabilitative-exercise-therapy/',
  },
} as const;

export const RESPONSE_TIME = {
  guarantee: '24 hours',
  description: 'We typically respond to all inquiries within 24 hours during business days.',
} as const;
