"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Login from '@/app/login/page'

const Navbar = () => {
  const { data: session } = useSession()

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-slate-50 flex justify-between px-4 md:h-12 items-center'>
      <div className="logo font-bold text-xl flex gap-2 justify-center items-center">
        <h1 className="font-bold tracking-tight">
          Chai <span className="text-purple-600">&</span> Fund
        </h1>
        <img src="/tea.gif" width={30} alt="" className='bg-purple-300 rounded-full' />
      </div>
      {/* <ul className='flex justify-between gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Sign up</li>
        <li>Log in</li>
      </ul> */}
      <div className='relative group'>
        {session && <>
          {/* Button */}
          <button className="inline-flex items-center gap-2 text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-full text-sm px-4 py-2">
            {session?.user?.name || session?.user?.email || "Account"}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="m19 9-7 7-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>


          {/* Hover bridge (THIS IS THE FIX) */}
          <div className="absolute right-0 top-full h-3 w-full"></div>

          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-3 z-50 hidden group-hover:block w-44 rounded-xl bg-white border border-gray-200 shadow-lg">
            <ul className="py-2 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href={"/"}>
                  <button className=''>Home Page</button>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href={"/dashboard"}>
                  <button className=''>Dashboard</button>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href={session.user.name}>
                  <button className=''>Your Page</button>
                </Link>
              </li>
              {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href={"/earning"}>
                  <button className=''>Earning</button>
                </Link>
              </li> */}
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                <button onClick={() => { signOut() }}>SIgn out</button>
              </li>
            </ul>
          </div>
        </>}
        {/* {session && <Link href={"/dashboard"}>
          <button className='text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2 text-center leading-5'>Dashboard</button>
        </Link>} */}
        {/* {session &&
          <button className='text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2 text-center leading-5' onClick={() => { signOut() }}>Logout</button>
        } */}
        {!session && <Link href={"/login"}>
          <button className='text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2 text-center leading-5'>Login</button>
        </Link>}
      </div>
    </nav >
  )
}

export default Navbar
