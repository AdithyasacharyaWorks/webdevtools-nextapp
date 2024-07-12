'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addCategorySchema, AddCategorySchema } from "@/app/types/addCategory";
import axios from "axios";
import { useState } from "react";
import { TbFaceIdError } from "react-icons/tb";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddCategorySchema>({
    resolver: zodResolver(addCategorySchema),
  });
  const [result, setResult] = useState<any>();
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (data: AddCategorySchema) => {
    // Simulate async operation
    try {
      const response = await axios.post('http://localhost:3000/api/category', data);
      setResult(response);
      reset();
      setSuccessMessage('Category added successfully!');
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to add category. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add category</h2>
        <div role="alert" className="alert shadow-lg mb-5 flex flex-col">
          <h3 className="font-bold text-secondary">
            Why add Category<span className="text-secondary p-1">!</span>
          </h3>
          <span className="text-sm">
            Category added will be listed while adding tools.
          </span>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("categoryName")}
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Please enter category name"
            required
          />
          {errors.categoryName && (
            <p className="text-red-500">{`${errors.categoryName.message}`}</p>
          )}
          {result?.data?.status === 400 && (
            <p className="text-red-500 mb-1 flex items-center gap-2">
              <TbFaceIdError /><span>The category is already present</span>
            </p>
          )}

          {successMessage && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{successMessage}</span>
            </div>
          )}
          {errorMessage && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
