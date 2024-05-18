import { PetBreed } from "./PetBreed";

export interface PetImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: PetBreed[];
}
