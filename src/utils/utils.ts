import { MetaDataProps } from "@/interFace/interFace";
import mongoose from "mongoose";
import { Metadata } from "next";
import Stripe from "stripe";

export const animationCreate = () => {
  if (typeof window !== "undefined") {
    (window as any).WOW = require("wowjs");
  }
  new (window as any).WOW.WOW({ live: false }).init();
};

// Generating Stripe session
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string || '');

// MetaData
export function generateMetadata({
  title,
  description,
  url,
  keywords,
  image, // Default image
}: MetaDataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000";

  const images = Array.isArray(image) ? image : [image];

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      url: `${baseUrl}${url}`,
      title,
      description,
      images: images.map((img) => ({ url: img ? (img.startsWith("http") ? img : `${baseUrl}${img}`) : `${baseUrl}/default-image.jpg` })),
    },
    keywords,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: images[0] || `${baseUrl}/assets/opengraph-image.png` }],
    },
  };
}

// MongoDB connection
export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return; // Already connected
    }

    await mongoose.connect(process.env.NEXT_MONGODB_URI as string, {
      dbName: "Kangaroo_Solar",
    } as any);

  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};