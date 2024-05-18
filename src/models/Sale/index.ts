import { Schema, model, Document } from 'mongoose';

class SaleClass {
  saleDate: Date;
  salePrice: number;
  petBreeds: string[];

  constructor(petBreeds: string[], saleDate: Date, salePrice: number) {
    this.saleDate = saleDate;
    this.salePrice = salePrice;
    this.petBreeds = petBreeds;
  }
}

interface ISaleModel extends SaleClass, Document {}

const saleSchema = new Schema<ISaleModel>({
  saleDate: Date,
  salePrice: Number,
  petBreeds: [String],
});

const SaleModel = model<ISaleModel>('Sale', saleSchema);

export { SaleModel };
