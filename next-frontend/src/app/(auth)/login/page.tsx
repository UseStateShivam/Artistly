'use client';

import { useLoginHandler } from '@/lib/hooks/useLoginHandler';

function page() {
  const { handleSubmit, error } = useLoginHandler();
  return (
    <div className='w-screen flex h-screen items-center justify-center overflow-hidden bg-[#174f46]'>
      <div className='relative z-10 flex flex-col items-center justify-center w-[406px] h-auto p-8 bg-white rounded-2xl shadow-lg border border-[#B9B9B9]'>
        <h2 className="text-[#174f46] text-[24px] font-semibold text-center mb-2">
          Login to Dashboard
        </h2>
        <p className="text-[#174f46] text-[14px] opacity-80 text-center mb-6">
          Please enter the secret key to access the dashboard.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">
          <div className='w-full'>
            <label className="text-[#174f46] text-[13px] opacity-80">Secret Key</label>
            <input
              type="text"
              name="secret"
              placeholder="Enter Secret Key"
              className="w-full mt-1 border border-[#b9b9b975] rounded-md p-3 text-[14px] bg-[#F1F4F9]"
            />
          </div>

          <div className="flex items-center gap-2 w-full">
            <input type="checkbox" id="remember" className="accent-[#b7f37b]" defaultChecked />
            <label htmlFor="remember" className="text-[13px] text-[#174f46] opacity-70">
              Remember Me
            </label>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center mt-2">{error}</div>
          )}

          <button
            type="submit"
            className="bg-[#b7f37b] text-[#174f46] rounded-md p-2 font-medium text-center w-[80%] hover:cursor-pointer mt-6 hover:bg-[#a3dd6e] transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4 text-sm opacity-80 text-[#000]">
          Don't know what the key is?&nbsp;
          <span className="text-[#174f46] underline">Try my full name</span>
        </p>
        <p className="text-center text-sm opacity-80 text-[#7c7c7c]">
          *What do you mean you forgot!!?? 😭 go back to the homepage, it's right in the Hero Section
        </p>
      </div>
    </div>
  );
}

export default page;
