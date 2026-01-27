/**
 * Shared TypeScript types
 * Import from here: import type { SomeType } from '~types'
 */

// Common utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// API response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// User types (if needed in future)
export interface User {
  id: string;
  email: string;
  name: string;
}
