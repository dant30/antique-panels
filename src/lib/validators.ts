/**
 * Common regex and validation utilities
 */

// Precise Kenyan local phone number regex (07XX / 01XX or +254 / 254)
export const LOCAL_KENYAN_PHONE_REGEX =
  /^(?:(?:\+?254|0)(?:\s|-)?(?:[17]\d{2})(?:\s|-)?\d{3}(?:\s|-)?\d{3})$/;

// Standard International phone regex (E.164)
export const INTERNATIONAL_PHONE_REGEX =
  /^\+?[1-9]\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// Flexible combined regex
export const PHONE_REGEX =
  /^(?:(?:\+?254|0)[17]\d{8}|\+?[1-9]\d{7,14})$/;

export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[\s\-().]/g, '');
}

export function isValidPhoneNumber(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const trimmed = phone.trim();
  const normalized = normalizePhoneNumber(trimmed);

  if (LOCAL_KENYAN_PHONE_REGEX.test(trimmed)) return true;
  if (/^(?:0[17]\d{8}|254[17]\d{8}|\+254[17]\d{8})$/.test(normalized)) return true;
  if (INTERNATIONAL_PHONE_REGEX.test(trimmed) && normalized.length >= 8 && normalized.length <= 16) {
    return true;
  }
  return false;
}

export function isValidRegistration(reg: string): boolean {
  if (!reg || typeof reg !== 'string') return false;
  const trimmed = reg.trim();
  return trimmed.length >= 3 && trimmed.length <= 15;
}
