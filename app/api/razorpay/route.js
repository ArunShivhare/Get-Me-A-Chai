
//  This is the Razorpay payment verification route

import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
import User from "@/models/user";

export const POST = async (request) => {
    await connectDB()
    let body = await request.formData()
    body = Object.fromEntries(body)

    //check if razorpayorderid is present on the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if(!p){
    return NextResponse.json({success: "false", message: "Order id not found"}, {status: 404})
    }

    // fetch the secret of the user who is getting the payment 
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    //verify the payment signature
    let x = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)

    if(x){
        const updatedpayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id},{done: "true"}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedpayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success: "false", message: "Payment verification failed"}, {status: 400})
    }

}

