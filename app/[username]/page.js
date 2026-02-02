import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDB'
import User from '@/models/user'

export async function generateMetadata({ params }) {
  const { username } = await params;

  return {
    title: `${username} - Chai & Fund`,
  }
}

const Username = async ({ params }) => {
  const { username } = await params;

  //if user not present in databse then show 404 page
  const checkuser = async () => {
    await connectDB()
    let u = await User.findOne({ username: username })
    if (!u) {
      return notFound()
    }
  }

  

  await checkuser()

  return (
    <>
      <PaymentPage username={username} />
    </>
  )
}

export default Username