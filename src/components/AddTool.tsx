'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LetterPullup from "./ui/LetterPullup";
import Loader from "./Loader";
import { addToolSchema, AddToolSchema } from "@/app/types/addTool";

const AddTool = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://webdevtools-version1.netlify.app/api/category");
        setCategories(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddToolSchema>({
    resolver: zodResolver(addToolSchema),
  });

  const onSubmit = async (data: AddToolSchema) => {
    try {
      // Convert the selected categories array into a comma-separated string
      const formattedData = {
        ...data,
        category: data.category.join(", "),
      };
      const response = await axios.post("https://webdevtools-version1.netlify.app/api/tools", formattedData); // Adjust API endpoint as per your backend
      console.log(response.data); // Log the response for debugging
      setSuccessMessage('Tool added successfully!');
      setErrorMessage('');
      reset();
    } catch (error) {
      console.error("Error adding tool:", error);
      setErrorMessage('Failed to add tool. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-2">
      <LetterPullup
        className="text-xl text-black dark:text-secondary"
        words={"Add your web development tool"}
        delay={0.05}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-s space-y-4 bg-white p-5 shadow-2xl"
      >
        <label className="w-full">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-1">
            Please add tool name
          </div>
          <input
            type="text"
            {...register("toolName", { required: true })}
            className={`input input-bordered input-secondary w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent ${
              errors.toolName ? "border-red-500" : ""
            }`}
            placeholder="Type here.."
          />
          {errors.toolName && (
            <p className="text-red-500">{errors.toolName.message}</p>
          )}
        </label>
        <label className="w-full">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-1">
             Detail
          </div>
          <input
            type="text"
            {...register("detail", { required: true })}
            className={`input input-bordered input-secondary w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent ${
              errors.detail ? "border-red-500" : ""
            }`}
            placeholder="Type here.."
          />
          {errors.detail && (
            <p className="text-red-500">{errors.detail.message}</p>
          )}
        </label>
        <label className="w-full">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-1">
           Select the categories
          </div>
          {loading ? (
            <Loader />
          ) : (
            <select
              {...register("category", { required: true })}
              className={`select select-bordered select-secondary w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent ${
                errors.category ? "border-red-500" : ""
              }`}
              multiple
            >
              {categories.map((cat) => (
                <option key={cat.$id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          )}
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </label>
        <label className="w-full">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-1">
            Add label
          </div>
          <input
            type="text"
            {...register("Label")}
            className={`input input-bordered input-secondary w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent ${
              errors.Label ? "border-red-500" : ""
            }`}
            placeholder="Type here.."
          />
          {errors.Label && (
            <p className="text-red-500">{errors.Label.message}</p>
          )}
        </label>
        <label className="w-full">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-1">
            Please add website URL
          </div>
          <input
            type="text"
            {...register("webUrl", { required: true })}
            className={`input input-bordered input-secondary w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent ${
              errors.webUrl ? "border-red-500" : ""
            }`}
            placeholder="Type here.."
          />
          {errors.webUrl && (
            <p className="text-red-500">{errors.webUrl.message}</p>
          )}
        </label>
        <button
          type="submit"
          className="btn btn-secondary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {successMessage && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-current mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{successMessage}</span>
          </div>
        )}
        {errorMessage && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-current mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddTool;
