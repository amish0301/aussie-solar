import Stripe from "stripe";

export const animationCreate = () => {
  if (typeof window !== "undefined") {
    (window as any).WOW = require("wowjs");
  }
  new (window as any).WOW.WOW({ live: false }).init();
};


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string ?? '');