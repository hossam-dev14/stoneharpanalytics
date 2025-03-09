import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and twMerge
 * Handles Tailwind class conflicts and merges them properly
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}