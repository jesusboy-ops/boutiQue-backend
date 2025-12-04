import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Category description is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Category', categorySchema);
