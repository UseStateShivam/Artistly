'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ', 'Makeup Artist'];
const languages = ['English', 'Hindi', 'Punjabi', 'Tamil'];
const feeRanges = ['₹5k - ₹10k', '₹10k - ₹20k', '₹20k - ₹50k', '₹50k+'];

export default function OnboardingPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  const onSubmit = (data: any) => {
    console.log("Artist Submitted:", data);
    alert("Oops, no backend was written my lord Shivam for this pre-interview task 🤷‍♂️. But the frontend is glorious!");
    reset();
    setSelectedFileName("No file chosen");
  };


  return (
    <main className="py-28 px-4 md:px-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[#174f46] mb-4">Onboard as an Artist</h1>
      <p className="mb-8 text-[#174f46]">Fill out the form to get listed on Artistly.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-medium text-[#174f46] mb-1">Name</label>
          <input {...register('name', { required: true })} className="w-full border border-[#174f46] rounded-md p-2" />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        </div>

        {/* Bio */}
        <div>
          <label className="block font-medium text-[#174f46] mb-1">Bio</label>
          <textarea {...register('bio', { required: true })} className="w-full border border-[#174f46] rounded-md p-2 h-24" />
          {errors.bio && <span className="text-red-500 text-sm">Bio is required</span>}
        </div>

        {/* Category (Radio) */}
        <div>
          <label className="block font-medium text-[#174f46] mb-2">Category</label>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-[#174f46]">
                <input
                  type="radio"
                  value={cat}
                  {...register('category', { required: true })}
                  name="category"
                />
                {cat}
              </label>
            ))}
          </div>
          {errors.category && <span className="text-red-500 text-sm">Category is required</span>}
        </div>

        {/* Languages (Checkbox) */}
        <div>
          <label className="block font-medium text-[#174f46] mb-2">Languages Spoken</label>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-2 text-[#174f46]">
                <input type="checkbox" value={lang} {...register('languages')} />
                {lang}
              </label>
            ))}
          </div>
        </div>

        {/* Fee Range */}
        <div>
          <label className="block font-medium text-[#174f46] mb-1">Fee Range</label>
          <input
            type="number"
            placeholder="e.g. 15000"
            {...register('fee', { required: true, min: 1000 })}
            className="w-full border border-[#174f46] rounded-md p-2"
          />
          {errors.fee && <span className="text-red-500 text-sm">Fee is required</span>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium text-[#174f46] mb-1">Profile Image</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-[#b7f37b] text-[#174f46] px-4 py-2 rounded-md font-semibold hover:bg-[#a3dd6e] transition-colors duration-200">
              Upload Photo
              <input
                type="file"
                {...register('image')}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setSelectedFileName(e.target.files[0].name);
                  } else {
                    setSelectedFileName("No file chosen");
                  }
                }}
              />
            </label>
            <span className="text-sm text-[#174f46]">{selectedFileName}</span>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium text-[#174f46] mb-1">Location</label>
          <input {...register('location', { required: true })} className="w-full border border-[#174f46] rounded-md p-2" />
          {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-[#174f46] text-[#b7f37b] px-6 py-3 rounded-md hover:bg-[#133e39] cursor-pointer">
          Submit
        </button>
      </form>
    </main>
  );
}
