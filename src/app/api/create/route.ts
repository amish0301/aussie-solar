// import { stripe } from "@/utils/utils";
// import { NextRequest, NextResponse } from "next/server";


// export async function POST(req: NextRequest, res: NextResponse) {
//     try {
//         const { amount, description } = await req.json();

//         if (!amount || amount <= 0) {
//             return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
//         }

//         // create payment intent
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             mode: "payment",
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "aud",
//                         product_data: {
//                             name: description || "Solar Payment",
//                         },
//                         unit_amount: amount,
//                     },
//                     quantity: 1,
//                 },
//             ],
//             success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//             cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//         });

//         return NextResponse.json({ sessionId: session.id });
//     } catch (error) {
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }   