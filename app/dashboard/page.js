"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { fetchuser, updateProfile } from '@/actions/useraction'

const Dashboard = () => {

  const { data: session, status, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/")
    }
    if (status === "authenticated" && session?.user?.name) {
      getdata()
    }
  }, [status, router])


  const getdata = async () => {
    if (!session?.user?.name) return
    let u = await fetchuser(session.user.name)
    setform(u)
  }

  const handlesubmit = async (e) => {
    // e.preventDefault()

    if (!session?.user?.name) return

    await update()
    await updateProfile(form, session.user.name)

    toast('Profile Updated Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
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
          <form className="space-y-6" action={handlesubmit}>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input onChange={handleChange}
                name="name"
                value={form.name || ""}
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
              <input onChange={handleChange}
                name="email"
                value={form.email || ""}
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
              <input onChange={handleChange}
                name="username"
                value={form.username || ""}
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
              <input onChange={handleChange}
                name="profilepic"
                value={form.profilepic || ""}
                type="text"
                placeholder="https://..."
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Avatar */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Cover Image URL
              </label>
              <input onChange={handleChange}
                name="coverpic"
                value={form.coverpic || ""}
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
                <input onChange={handleChange}
                  name="razorpayid"
                  value={form.razorpayid || ""}
                  type="text"
                  placeholder="Razorpay Key ID"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                />
                <input onChange={handleChange}
                  name="razorpayssecret"
                  value={form.razorpayssecret || ""}
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
    </>
  )
}

export default Dashboard
