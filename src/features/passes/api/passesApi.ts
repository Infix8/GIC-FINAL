import { apiClient } from '@/lib/apiClient';

/**
 * Passes API service
 * Ready for future API integration
 */

export const passesApi = {
  /**
   * Get all passes
   */
  getPasses: async () => {
    // TODO: Implement when API is available
    // return apiClient.get('/passes');
    return Promise.resolve({ data: [] });
  },
};

export default passesApi;
