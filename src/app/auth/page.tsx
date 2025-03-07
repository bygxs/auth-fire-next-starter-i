// src/app/auth/page.tsx
"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebase"; // Adjust path if necessary
import { useAuth } from "../../hooks/useAuth"; // Import the custom hook
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user } = useAuth(); // Use the auth hook
  const router = useRouter(); // Initialize the router

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        // Sign up logic
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully!"); // For success
       // alert("Account created successfully!");
        router.push("/profile"); // Redirect to profile page after sign-up
      } else {
        // Sign in logic
        await signInWithEmailAndPassword(auth, email, password);
       // alert("Signed in successfully!");
        router.push("/dashboard"); // Redirect to dashboard page after sign-in
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
      //toast.error("An error occurred. Please try again."); // For error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 dark:bg-gray-900 p-4">
     

      {/* Authentication Form */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          {isSignUp ? "Create Account" : "Sign In"}
        </h1>

        {/* Login Method Toggle */}
        <div className="mb-4 flex">
          <button
            onClick={() => setLoginMethod("email")}
            className={`flex-1 py-2 px-4 ${
              loginMethod === "email"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-l-md`}
          >
            Email
          </button>
          <button
            onClick={() => setLoginMethod("phone")}
            className={`flex-1 py-2 px-4 ${
              loginMethod === "phone"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-r-md`}
          >
            Phone
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-4">
          {loginMethod === "email" && (
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle Between Sign Up and Sign In */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Need an account? Sign Up"}
          </button>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-4">
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 flex items-center justify-center">
            <Image
              src="/icons8-google-logo.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Google
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 flex items-center justify-center">
            <Image
              src="/icons8-apple-logo.svg"
              alt="Apple"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Apple
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 flex items-center justify-center">
            <Image
              src="/icons8-facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}