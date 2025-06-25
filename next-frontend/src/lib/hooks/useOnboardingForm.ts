import { useForm } from "react-hook-form";
import { useState } from "react";

// List of available artist categories
export const categories = ['Singer', 'Dancer', 'Speaker', 'DJ', 'Makeup Artist'];
// List of supported languages
export const languages = ['English', 'Hindi', 'Punjabi', 'Tamil'];

// Type definition for the onboarding form data
export type OnboardingFormData = {
  name: string;
  bio: string;
  category: string;
  languages: string[];
  fee: number;
  image: FileList;
  location: string;
};

// Custom hook to manage onboarding form logic
export function useOnboardingForm() {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OnboardingFormData>();

  // State to keep track of the selected file name
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  // Handler for form submission
  const onSubmit = (data: OnboardingFormData) => {
    console.log("Artist Submitted:", data);
    alert("Oops, no backend was written my lord Shivam for this pre-interview task 🤷‍♂️. But the frontend is glorious!");
    reset();
    setSelectedFileName("No file chosen");
  };

  // Handler for file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName("No file chosen");
    }
  };

  // Return form utilities and state
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    selectedFileName,
    handleFileChange,
  };
}
