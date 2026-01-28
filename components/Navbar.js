import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-white flex justify-between px-4 h-12 items-center'>
      <div className="logo font-bold text-lg flex gap-2 justify-center items-center">
        <span>GetMeAChai !</span>
        <img src="/tea.gif" width={30} alt="" />
      </div>
      {/* <ul className='flex justify-between gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Sign up</li>
        <li>Log in</li>
      </ul> */}
      <div>
        <Link href={"/login"}>
        <button className='text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2 text-center leading-5'>Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
