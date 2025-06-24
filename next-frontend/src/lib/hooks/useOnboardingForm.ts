import { useForm } from "react-hook-form";
import { useState } from "react";

export const categories = ['Singer', 'Dancer', 'Speaker', 'DJ', 'Makeup Artist'];
export const languages = ['English', 'Hindi', 'Punjabi', 'Tamil'];

export type OnboardingFormData = {
  name: string;
  bio: string;
  category: string;
  languages: string[];
  fee: number;
  image: FileList;
  location: string;
};

export function useOnboardingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OnboardingFormData>();

  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  const onSubmit = (data: OnboardingFormData) => {
    console.log("Artist Submitted:", data);
    alert("Oops, no backend was written my lord Shivam for this pre-interview task 🤷‍♂️. But the frontend is glorious!");
    reset();
    setSelectedFileName("No file chosen");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName("No file chosen");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    selectedFileName,
    handleFileChange,
  };
}
