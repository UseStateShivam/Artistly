'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/lib/slices/authSlice';
import { useState } from 'react';

/**
 * Custom hook to handle login form submission logic.
 *
 * Manages error state, dispatches login action, and redirects on successful login.
 *
 * @returns An object containing the `handleSubmit` function for form submission and the current `error` message.
 */
export function useLoginHandler() {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = (e.currentTarget.elements.namedItem("secret") as HTMLInputElement).value;
    const normalized = input.toLowerCase().replace(/[^a-z]/g, "");

    if (normalized.includes("shivam") && normalized.includes("verma")) {
      dispatch(login());
      router.push('/dashboard');
    } else {
      setError("Incorrect secret key, my lord. Try again 👑");
    }
  };

  return { handleSubmit, error };
}
