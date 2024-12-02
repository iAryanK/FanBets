import { model, models, Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageurl: string;
}

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  imageurl: { type: String },
});

export const Product =
  models?.Product || model<IProduct>("Product", productSchema);
