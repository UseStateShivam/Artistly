'use client';

// Import custom login handler hook
import { useLoginHandler } from '@/lib/hooks/useLoginHandler';

// Login page component
function page() {
  // Destructure handleSubmit and error from custom hook
  const { handleSubmit, error } = useLoginHandler();

  return (
    // Centered container with background color
    <div className='w-screen flex h-screen items-center justify-center overflow-hidden bg-[#174f46]'>
      {/* Login form card */}
      <div className='relative z-10 flex flex-col items-center justify-center w-[406px] h-auto p-8 bg-white rounded-2xl shadow-lg border border-[#B9B9B9]'>
        {/* Title */}
        <h2 className="text-[#174f46] text-[24px] font-semibold text-center mb-2">
          Login to Dashboard
        </h2>
        {/* Subtitle */}
        <p className="text-[#174f46] text-[14px] opacity-80 text-center mb-6">
          Please enter the secret key to access the dashboard.
        </p>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">
          {/* Secret key input */}
          <div className='w-full'>
            <label className="text-[#174f46] text-[13px] opacity-80">Secret Key</label>
            <input
              type="text"
              name="secret"
              placeholder="Enter Secret Key"
              className="w-full mt-1 border border-[#b9b9b975] rounded-md p-3 text-[14px] bg-[#F1F4F9]"
            />
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center gap-2 w-full">
            <input type="checkbox" id="remember" className="accent-[#b7f37b]" defaultChecked />
            <label htmlFor="remember" className="text-[13px] text-[#174f46] opacity-70">
              Remember Me
            </label>
          </div>

          {/* Error message */}
          {error && (
            <div className="text-red-500 text-sm text-center mt-2">{error}</div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="bg-[#b7f37b] text-[#174f46] rounded-md p-2 font-medium text-center w-[80%] hover:cursor-pointer mt-6 hover:bg-[#a3dd6e] transition"
          >
            Sign In
          </button>
        </form>

        {/* Hint and help text */}
        <p className="text-center mt-4 text-sm opacity-80 text-[#000]">
          Don't know what the key is?&nbsp;
          <span className="text-[#174f46] underline">Try my full name</span>
        </p>
        <p className="text-center text-sm opacity-80 text-[#7c7c7c]">
          *What do you mean you forgot!!?? 😭<br/> [HINT]: Try Shivam Verma
        </p>
      </div>
    </div>
  );
}

export default page;
