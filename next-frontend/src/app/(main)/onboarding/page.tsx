'use client';

import React from 'react';
import {
  categories,
  languages,
  useOnboardingForm,
} from '@/lib/hooks/useOnboardingForm';
import FormTitle from '@/components/ui/form-title';

export default function OnboardingPage() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    selectedFileName,
    handleFileChange,
  } = useOnboardingForm();

  return (
    <main className="py-28 px-4 md:px-16 max-w-3xl mx-auto">
      <FormTitle
        title="Onboard as an Artist"
        description="Fill out the form to get listed on Artistly."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block font-medium text-[#174f46] mb-1">Name</label>
          <input
            {...register('name', { required: true })}
            className="w-full border border-[#174f46] rounded-md p-2"
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        </div>

        <div>
          <label className="block font-medium text-[#174f46] mb-1">Bio</label>
          <textarea
            {...register('bio', { required: true })}
            className="w-full border border-[#174f46] rounded-md p-2 h-24"
          />
          {errors.bio && <span className="text-red-500 text-sm">Bio is required</span>}
        </div>

        <div>
          <label className="block font-medium text-[#174f46] mb-2">Categories</label>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-[#174f46]">
                <input
                  type="checkbox"
                  value={cat}
                  {...register('category', { required: true })}
                  className="accent-[#174f46]"
                />
                {cat}
              </label>
            ))}
          </div>
          {errors.category && (
            <span className="text-red-500 text-sm">Select at least one category</span>
          )}
        </div>

        <div>
          <label className="block font-medium text-[#174f46] mb-2">Languages Spoken</label>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-2 text-[#174f46]">
                <input type="checkbox" value={lang} {...register('languages')} className="accent-[#174f46]" />
                {lang}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-[#174f46] mb-1">Fee Range</label>
          <input
            type="number"
            placeholder="e.g. 15000"
            {...register('fee', { required: true, min: 1000 })}
            className="w-full border border-[#174f46] rounded-md p-2"
          />
          {errors.fee && (
            <span className="text-red-500 text-sm">Fee is required</span>
          )}
        </div>

        <div>
          <label className="block font-medium text-[#174f46] mb-1">Profile Image</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-[#b7f37b] text-[#174f46] px-4 py-2 rounded-md font-semibold hover:bg-[#a3dd6e] transition-colors duration-200">
              Upload Photo
              <input
                type="file"
                {...register('image')}
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <span className="text-sm text-[#174f46]">{selectedFileName}</span>
          </div>
        </div>

        <div>
          <label className="block font-medium text-[#174f46] mb-1">Location</label>
          <input
            {...register('location', { required: true })}
            className="w-full border border-[#174f46] rounded-md p-2"
          />
          {errors.location && (
            <span className="text-red-500 text-sm">Location is required</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#174f46] text-[#b7f37b] px-6 py-3 rounded-md hover:bg-[#133e39] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
