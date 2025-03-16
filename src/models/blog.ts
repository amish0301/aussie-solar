import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  _id: mongoose.ObjectId,
  category?: string;
  image?: string;
  author?: string;
  authorImg?: string;
  tags?: string[];
  summary?: string;  
  views?: number;
  likes?: number;
  comments?: {}[];
  createdAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    author: { type: String, default: 'Admin' },
    authorImg: { type: String },
    tags: [{ type: String }],
    summary: { type: String },
    views: { type: Number, default: 10 },
    likes: { type: Number, default: 5 },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
