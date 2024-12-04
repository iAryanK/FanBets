import { model, models, Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  team?: string;
}

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  team: { type: String },
});

export const User = models?.User || model<IUser>("User", userSchema);
