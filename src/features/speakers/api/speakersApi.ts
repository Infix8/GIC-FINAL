import { apiClient } from '@/lib/apiClient';

/**
 * Speakers API service
 * Ready for future API integration
 */

export const speakersApi = {
  /**
   * Get all speakers
   */
  getSpeakers: async () => {
    // TODO: Implement when API is available
    // return apiClient.get('/speakers');
    return Promise.resolve({ data: [] });
  },

  /**
   * Get speaker by ID
   */
  getSpeakerById: async (id: string) => {
    // TODO: Implement when API is available
    // return apiClient.get(`/speakers/${id}`);
    return Promise.resolve({ data: null });
  },
};

export default speakersApi;
