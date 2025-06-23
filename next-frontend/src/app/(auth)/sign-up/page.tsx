import React from 'react'

function page() {
  return (
    <div className='w-screen flex h-screen items-center justify-center overflow-hidden'>
      <img src="/Shape.svg" alt="main-shape" className='absolute inset-0 w-full h-full object-cover' />
      <div className='relative z-10 flex flex-col items-center justify-center w-[456px] h-[600px] p-8 bg-white rounded-2xl shadow-lg border border-[#B9B9B9]'>
        <h2 className="text-[#202224] text-[24px] font-semibold text-center mb-2">
          Create an Account
        </h2>
        <p className="text-[#202224] text-[14px] opacity-80 text-center mb-6">
          Create your account to get access to the pannel
        </p>
        <form className="flex flex-col gap-4 w-full items-center">
          <div className='w-full'>
            <label className="text-[#202224] text-[13px] opacity-80">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border border-[#b9b9b975] rounded-md p-3 text-[14px] bg-[#F1F4F9]"
            />
          </div>
          <div className='w-full'>
            <label className="text-[#202224] text-[13px] opacity-80">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full mt-1 border border-[#b9b9b975] rounded-md p-3 text-[14px] bg-[#F1F4F9]"
            />
          </div>
          <div className='w-full mt-2'>
            <label className="text-[#202224] text-[13px] flex justify-between opacity-80">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 border border-[#B9B9B975] rounded-md p-3 text-[14px] bg-[#F1F4F9]"
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <input type="checkbox" id="remember" className="accent-[#4880FF]" defaultChecked />
            <label htmlFor="remember" className="text-[13px] text-[#202224] opacity-70">
              Remember Password
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#4880FF] text-white rounded-md p-2 font-medium text-center w-[80%] hover:cursor-pointer mt-6"
          >
            Request Access
          </button>
        </form>
        <p className="text-center mt-4 text-sm opacity-80 text-[#202224]">
          Already have an account?&nbsp;
          <a href="/login" className="text-[#4880FF] underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default page