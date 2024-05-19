import { Pet } from '../../types/Pet';
import envs from '../../constants/envs';
import axios, { AxiosInstance } from 'axios';
import { PetBreed } from '../../types/PetBreed';
import { PetImage } from '../../types/PetImage';

class TheCatApiServices {
  private apiKey: string;
  private baseUrl: string;
  private api: AxiosInstance;

  constructor() {
    this.apiKey = envs.api_key;
    this.baseUrl = envs.base_url;

    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: { 'x-api-key': this.apiKey },
    });
  }

  private async getPetImage(imageId: string) {
    const { data } = await this.api.get(`/images/${imageId}`);

    const { url } = data as PetImage;
    return url;
  }

  private getRandomPrice() {
    const min = 100;
    const max = 1000;

    const randomPrice = Math.random() * (max - min) + min;
    return parseFloat(randomPrice.toFixed(2));
  }

  async getPets() {
    try {
      const route = '/breeds?limit=28&page=0';
      const { data } = await this.api.get(route);

      const promises = data.map(async (pet: PetBreed) => {
        const { id, name: breed, description, reference_image_id } = pet;

        const breedInfo = { id, breed, description };

        const fictitiousPrice = this.getRandomPrice();
        const imageUrl = await this.getPetImage(reference_image_id);

        return { ...breedInfo, price: fictitiousPrice, imageUrl };
      });

      const petList: Pet[] = await Promise.all(promises);
      return petList;
    } catch (error) {
      throw error;
    }
  }
}

export { TheCatApiServices };
