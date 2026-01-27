import { apiClient } from '@/lib/apiClient';

/**
 * Events API service
 * Ready for future API integration
 */

export const eventsApi = {
  /**
   * Get all events
   */
  getEvents: async () => {
    // TODO: Implement when API is available
    // return apiClient.get('/events');
    return Promise.resolve({ data: [] });
  },

  /**
   * Get event by ID
   */
  getEventById: async (id: string) => {
    // TODO: Implement when API is available
    // return apiClient.get(`/events/${id}`);
    return Promise.resolve({ data: null });
  },
};

export default eventsApi;
