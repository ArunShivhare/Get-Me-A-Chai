import React from 'react'

const Username = async ({ params }) => {

  const { username } = await params;

  return (
    <>
      <div className='cover'>
        <img className='object-cover w-full' src="cover.png" alt="" />
        <div className=' bottom-80 absolute right-[46%] border-2 border-black rounded-full'>
          <img className='rounded-full' width={123} height={123} src="profile.png" alt="" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-19 flex-col gap-3">
        <div className='font-bold text-xl'>
          @{username}
        </div>
        <div className='text-gray-500'>
          Podiatry and Foot Health Educational Resources
        </div>
        <div className='text-gray-500'>
          1,261 members. 140 Posts. $2,752/month
        </div>

        <div className="payment flex gap-3 w-[80%] mt-10">
          <div className="supporter w-1/2 bg-slate-100 rounded-lg p-10">
            {/* show list of all the supporter as a leader board */}
            <h2 className='text-2xl font-bold my-5'>Supporter</h2>
            <ul className='mx-5'>
              <li className='my-2 flex items-center gap-2'>
                <img width={30} src="avatar.gif" alt="" />
                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img width={30} src="avatar.gif" alt="" />
                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img width={30} src="avatar.gif" alt="" />
                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img width={30} src="avatar.gif" alt="" />
                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
              </li>
            </ul>
          </div>
          <div className="makepayment w-1/2 bg-slate-100 rounded-lg p-10">
            <h2 className='font-bold text-2xl my-5'>Make a Payment</h2>
            <div className='flex gap-3 flex-col'>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-200' placeholder='Enter Name' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-200' placeholder='Enter Message' />
              <div className='felx space-x-5'>
                <input type="text" className='w-[65%] p-3 rounded-lg bg-slate-200' placeholder='Enter Amount' />
                <button className='cursor-pointer bg-linear-to-br from-purple-200 to-blue-300 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-3.5 w-[30%] text-center leading-5'>Pay</button>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button className='bg-slate-200 rounded-lg p-3 cursor-pointer'>Pay $10</button>
              <button className='bg-slate-200 rounded-lg p-3 cursor-pointer'>Pay $20</button>
              <button className='bg-slate-200 rounded-lg p-3 cursor-pointer'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
