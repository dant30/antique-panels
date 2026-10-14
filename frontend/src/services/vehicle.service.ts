import { VehicleProject } from '@/types/vehicle';
import { VEHICLE_PROJECTS } from '@/features/vehicles/data/vehicles';
import { apiClient } from './api/apiClient';

export const vehicleService = {
  /**
   * Fetch all vehicle projects with optional filter
   */
  async getVehicles(category?: string): Promise<VehicleProject[]> {
    const hasLiveBackend = Boolean(import.meta.env.VITE_API_BASE_URL);

    if (hasLiveBackend) {
      try {
        return await apiClient<VehicleProject[]>('/vehicles', {
          params: category && category !== 'all' ? { category } : undefined,
        });
      } catch (error) {
        console.warn('Backend API request failed, falling back to local dataset:', error);
      }
    }

    if (!category || category === 'all') {
      return VEHICLE_PROJECTS;
    }

    return VEHICLE_PROJECTS.filter(
      (v) => v.category.toLowerCase() === category.toLowerCase()
    );
  },

  /**
   * Get single vehicle project by slug
   */
  async getVehicleBySlug(slug: string): Promise<VehicleProject | undefined> {
    const hasLiveBackend = Boolean(import.meta.env.VITE_API_BASE_URL);

    if (hasLiveBackend) {
      try {
        return await apiClient<VehicleProject>(`/vehicles/${slug}`);
      } catch (error) {
        console.warn('Backend API request failed, falling back to local dataset:', error);
      }
    }

    return VEHICLE_PROJECTS.find((v) => v.slug === slug);
  },
};
