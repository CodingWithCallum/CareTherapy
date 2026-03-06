/**
 * Formatting Utilities
 *
 * Centralized formatting functions to ensure consistency across the application.
 */

/**
 * Format a date string in long format
 * Example: "January 15, 2024"
 *
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 */
export function formatDateLong(dateString: string | Date): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Format a date string in short format
 * Example: "Jan 15, 2024"
 *
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 */
export function formatDateShort(dateString: string | Date): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Format a date string in compact format (no year)
 * Example: "Jan 15"
 *
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 */
export function formatDateCompact(dateString: string | Date): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format a date string in relative format
 * Example: "2 days ago", "in 3 days"
 *
 * @param dateString - ISO date string or Date object
 * @returns Relative date string
 */
export function formatDateRelative(dateString: string | Date): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  if (diffInSeconds < 60) {
    return 'just now';
  }

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const diff = Math.floor(Math.abs(diffInSeconds) / secondsInUnit);

    if (diff >= 1) {
      const isPlural = diff > 1;
      const suffix = isPlural ? 's' : '';

      if (diffInSeconds > 0) {
        return `${diff} ${unit}${suffix} ago`;
      } else {
        return `in ${diff} ${unit}${suffix}`;
      }
    }
  }

  return 'just now';
}

/**
 * Format a phone number for display
 * Example: "+27797908846" -> "+27 79 790 8846"
 *
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');

  // If there's no meaningful length, return original
  if (cleaned.length < 10) {
    return phone;
  }

  // South African international format: +27 XX XXX XXXX
  if (cleaned.startsWith('+27') && cleaned.length === 12) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  }

  // US/Canada international format: +1 XXX XXX XXXX
  if (cleaned.startsWith('+1') && cleaned.length === 12) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  }

  // UK international format: +44 XXXX XXXXXX
  if (cleaned.startsWith('+44') && cleaned.length === 13) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7)}`;
  }

  // Australian international format: +61 X XXXX XXXX
  if (cleaned.startsWith('+61') && cleaned.length === 12) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
  }

  // Local 10-digit formats (e.g. South Africa 0XX XXX XXXX, US XXX XXX XXXX)
  if (!cleaned.startsWith('+') && cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }

  // Default: return unformatted original string
  return phone;
}

/**
 * Format a currency amount
 * Example: 500 -> "R500"
 *
 * @param amount - Amount in rands
 * @param showDecimals - Whether to show decimal places
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, showDecimals: boolean = false): string {
  const formatted = showDecimals
    ? amount.toFixed(2)
    : Math.floor(amount).toString();

  return `R${formatted}`;
}
