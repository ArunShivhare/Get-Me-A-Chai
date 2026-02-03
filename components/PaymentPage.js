"use client"
import React, { use } from 'react'
import Script from 'next/script'
// import { initiate } from '@/actions/useraction'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useraction'


const PaymentPage = ({ username }) => {

    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])


    // use this when payment working

    // useEffect(() => {
    //     if (searchParams.get("paymentdone") == "true") {
    //         toast('Thanks for your donation!', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     }
    //     router.push(`/${username}`)

    // }, [])


    // This is from AI
    // useEffect(() => {
    //     const loadPayments = async () => {
    //         const data = await fetchpayments(username)
    //         setPayments(data)
    //     }
    //     loadPayments()
    // }, [username])


    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        // this is when you want to integrate razorpay

        // Get the order Id 
        // let a = await initiate(amount, username, paymentform)
        // let orderId = a.id
        // var options = {
        //     "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
        //     "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        //     "currency": "INR",
        //     "name": "Get Me A Chai", //your business name
        //     "description": "Test Transaction",
        //     "image": "https://example.com/your_logo",
        //     "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        //     "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        //         "name": "Gaurav Kumar", //your customer's name
        //         "email": "gaurav.kumar@example.com",
        //         "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        //     },
        //     "notes": {
        //         "address": "Razorpay Corporate Office"
        //     },
        //     "theme": {
        //         "color": "#3399cc"
        //     }
        // }

        // var rzp1 = new Razorpay(options);
        // rzp1.open();

        
        alert("Payment gateway coming soon 🚧");
        await initiate(
            Number(paymentform.amount) * 100,
            username,
            paymentform
        )

        toast('Thanks for your donation!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        // 🔁 RE-FETCH PAYMENTS AFTER SUCCESS
        const updatedPayments = await fetchpayments(username)
        setPayments(updatedPayments)

        //clear the form
        setPaymentform({
            name: "",
            message: "",
            amount: ""
        })

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            {/* <div className='cover'>
                <img className='object-cover w-full' height={250} src={currentUser.coverpic || "cover.png"} alt="" />
                <div className=' bottom-80 absolute right-[46%] border-2 border-black rounded-full'>
                    <img className='rounded-full' width={123} height={123} src={currentUser.profilepic || "profile.png"} alt="" />
                </div>
            </div> */}

            <div className="cover mt-2 relative w-full">
                <img
                    src={currentUser.coverpic || "/cover.png"}
                    alt="cover"
                    className="w-full h-[220] md:h-[280] object-cover rounded-b-3xl"
                />

                {/* Profile Image */}
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
                    <img
                        src={currentUser.profilepic || "/profile.png"}
                        alt="profile"
                        className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>
            </div>

            <div className="info flex justify-center items-center my-19 flex-col gap-3">
                {/* <div className='font-bold text-xl'>
                    @{username}
                </div>
                <div className='text-gray-500'>
                    Lets help {username}, to get someone's a chai!
                </div>
                <div className='text-gray-500'>
                    {payments.length} Payments .   ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div> */}
                <div className="flex flex-col items-center text-center gap-2 px-4">
                    <h1 className="text-2xl font-bold">@{username}</h1>

                    <p className="text-gray-500">
                        Let’s help <span className="font-medium">{username}</span> to get a chai ☕
                    </p>

                    <p className="text-sm text-gray-500">
                        {payments.length} payments · ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                    </p>
                </div>

                {/* <div className="payment flex gap-3 w-[80%] mt-10">
                    <div className="supporter w-1/2 bg-slate-100 rounded-lg p-10"> */}
                <div className="max-w-6xl mx-auto mt-12 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* show list of all the supporter as a leader board */}
                        {/* <h2 className='text-2xl font-bold my-5'>Top Supporter</h2>
                        <ul className="mx-5">
                            {payments.length === 0 && (
                                <p className="text-gray-500">No supporters yet</p>
                            )}

                            {payments.map((p, i) => (
                                <li key={p._id} className="my-2 flex items-center gap-2">
                                    <img width={30} src="avatar.gif" alt="" />
                                    <span>
                                        {p.name} give <span className="font-bold">${p.amount}</span> to {p.to_user}
                                        {p.message && ` with a message "${p.message}"`}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                        <div className="bg-white rounded-2xl shadow-md border p-6">
                            <h2 className="text-xl font-semibold mb-4">Top Supporters ❤️</h2>

                            {payments.length === 0 && (
                                <p className="text-gray-500 text-sm">No supporters yet</p>
                            )}

                            <ul className="space-y-3">
                                {payments.slice(0, 5).map((p) => (
                                    <li key={p._id} className="flex items-center gap-3">
                                        <img src="/avatar.gif" alt="" className="w-8 h-8 rounded-full" />
                                        <p className="text-sm">
                                            <span className="font-medium">{p.name}</span> donated{" "}
                                            <span className="font-semibold">₹{p.amount}</span>
                                            {p.message && (
                                                <span className="text-gray-500"> — “{p.message}”</span>
                                            )} to {p.to_user}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* <div className="makepayment w-1/2 bg-slate-100 rounded-lg p-10">
                            <h2 className='font-bold text-2xl my-5'>Make a Payment</h2>
                            <div className='flex gap-3 flex-col'>
                                <input onChange={handlechange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-200' placeholder='Enter Name' />
                                <input onChange={handlechange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-200' placeholder='Enter Message' />
                                <div className='felx space-x-5'>
                                    <input onChange={handlechange} value={paymentform.amount} name='amount' type="text" className='w-[65%] p-3 rounded-lg bg-slate-200' placeholder='Enter Amount' />
                                    <button onClick={() => pay(Number(paymentform.amount) * 100)} className='cursor-pointer bg-linear-to-br from-purple-200 to-blue-300 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-3.5 w-[30%] text-center leading-5 disabled:opacity-50' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <button className='bg-slate-200 rounded-lg p-3 cursor-pointer disabled:bg-slate-50' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(1000)}>Pay ₹10</button>
                                <button className='bg-slate-200 rounded-lg p-3 cursor-pointer disabled:bg-slate-50' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(2000)}>Pay ₹20</button>
                                <button className='bg-slate-200 rounded-lg p-3 cursor-pointer disabled:bg-slate-50' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(3000)}>Pay ₹30</button>
                            </div>
                        </div> */}
                        <div className="bg-white rounded-2xl shadow-md border p-6">
                            <h2 className="text-xl font-semibold mb-4">Make a Payment 💳</h2>

                            <div className="space-y-4">
                                <input
                                    name="name"
                                    value={paymentform.name}
                                    onChange={handlechange}
                                    placeholder="Your Name"
                                    className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                                />

                                <input
                                    name="message"
                                    value={paymentform.message}
                                    onChange={handlechange}
                                    placeholder="Message"
                                    className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                                />

                                <div className="flex gap-3">
                                    <input
                                        name="amount"
                                        value={paymentform.amount}
                                        onChange={handlechange}
                                        placeholder="Amount (₹)"
                                        className="w-2/3 rounded-lg border px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />

                                    <button
                                        onClick={() => pay(Number(paymentform.amount) * 100)}
                                        disabled={
                                            paymentform.name?.length < 3 ||
                                            paymentform.message?.length < 4 ||
                                            paymentform.amount?.length < 1
                                        }
                                        className="w-1/3 bg-linear-to-br from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50"
                                    >
                                        Pay
                                    </button>
                                </div>
                            </div>

                            {/* Quick Buttons */}
                            {/* have to work on these buttons later */}
                            {/* <div className="flex gap-3 mt-6">
                                {[10, 20, 30].map((amt) => (
                                    <button
                                        key={amt}
                                        onClick={() => {
                                            pay(Number(amt) * 100)
                                        }}
                                        disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}
                                        className="flex-1 bg-gray-100 rounded-lg py-2 text-sm hover:bg-gray-200 disabled:opacity-50"
                                    >
                                        Pay ₹{amt}
                                    </button>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage
