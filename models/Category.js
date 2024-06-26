import mongoose, { model, Schema, models } from 'mongoose';

const CategorySchema = new Schema({
  name: { type: String, required: true },
}, {
  timestamps: true,
});

export const Category = models.Category || model('Category', CategorySchema);
