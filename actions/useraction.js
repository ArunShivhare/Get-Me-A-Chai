"use server"
import Razorpay from "razorpay"
import Payment from "@/models/payment"
import connectDB from "@/db/connectDB"
import User from "@/models/user"
import { v4 as uuidv4 } from 'uuid';

// export const initiate = async (amount, to_username, paymentform) => {
//     await connectDB()
//     let user = await User.findOne({ username: to_username })
//     const secret = user.razorpaysecret
//     const id = user.razorpayid
//     var instance = new Razorpay({ key_id: id, key_secret: secret })

//     // instance.orders.create({
//     //     amount: 50000,
//     //     currency: "INR",
//     //     receipt: "receipt#1",
//     //     notes: {
//     //         key1: "value3",
//     //         key2: "value2"
//     //     }
//     // })

//     let options = {
//         amount: Number.parseInt(amount),
//         currency: "INR",
//     }

//     let x = await instance.orders.create(options)
//     // let x = instance.orders.create(options)

//     //creare a payment object which show the pending payment in the database
//     // await Payment.create({ oid: x.id, name: paymentform.name, to_user: to_username, message: paymentform.message, amount: amount / 100 })

//     await Payment.create({
//         oid: x.id,
//         name: paymentform.name,
//         to_user: to_username,
//         message: paymentform.message,
//         amount: amount / 100,
//         done: false   // explicit
//     })

//     return x
// }


// A dummy initiate function that does not use Razorpay
export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()

    await Payment.create({
        oid: crypto.randomUUID(),
        name: paymentform.name,
        to_user: to_username,
        message: paymentform.message,
        amount: Number(amount) / 100,
        done: true
    })

    // return { id: "dummy-order-id" }
    return {
        id: uuidv4().toString()
    }
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })

    if (!u) {
        return null;
    }

    let user = u.toObject({ flattenObjectIds: true })
    return user;
}

export const fetchpayments = async (username) => {
    await connectDB()
    //find all payments soerted by amount in descending order
    // let payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    let payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean()
    // let payments = await Payment.find({to_user: username}).sort({ createdAt: -1 })

    // Temporarily convert _id to string
    payments = payments.map(p => ({
        ...p,
        _id: p._id.toString(),
        createdAt: p.createdAt?.toISOString(),
        updatedAt: p.updatedAt?.toISOString(),
    }))

    return payments;
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(Object.entries(data))

    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })

    }
    else {
        await User.updateOne({ email: ndata.email }, ndata)
    }

    // return { success: true }
}