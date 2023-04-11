import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pricesIds = req.body.pricesIds;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (pricesIds.length === 0) {
    return res.status(400).json({ message: "Price ID is required" });
  }

  const items = pricesIds.map((priceId) => {
    return {
      price: priceId,
      quantity: 1,
    };
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}/`,
    mode: "payment",
    line_items: [...items],
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
