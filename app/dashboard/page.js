"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Dashboard = () => {

    const { data: session, status } = useSession()
       const router = useRouter()
    
        useEffect(() => {
        if (status === "unauthenticated") {
          router.push("/")
        }
      }, [status, router])

  return (
    <div className="min-h-screen flex justify-center items-start pt-20 px-4 py-20">
      <div className="w-full max-w-2xl bg-white border rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome To Dashboard ⚙️
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Manage your public profile & payment settings
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="john123"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Your public page will be: getmeachai.com/username
            </p>
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Profile Picture URL
            </label>
            <input
              type="text"
              placeholder="https://..."
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Avatar */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Avatar Image URL
            </label>
            <input
              type="text"
              placeholder="https://..."
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Razorpay */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">
              Razorpay Credentials 💳
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Razorpay Key ID"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="password"
                placeholder="Razorpay Secret"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-linear-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 rounded-xl transition"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  )
}

export default Dashboard
