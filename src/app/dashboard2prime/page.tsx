"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode"; // Library to decode JWT tokens (install with `npm install jwt-decode`)

// Define the TypeScript type for the user object
type User = {
  email: string;
};

// Define the structure of the decoded JWT token
type DecodedToken = {
  email: string; // Ensure the token contains this property (adjust if needed)
};

export default function Dashboard() {
  // State to hold the user's information
  const [user, setUser] = useState<User | null>(null);

  // Next.js router for client-side navigation
  const router = useRouter();

  /**
   * useEffect: Checks for authentication when the component is mounted
   * - Extracts the token from cookies
   * - Decodes the token to retrieve user information
   * - Redirects to "/login" if the token is missing or invalid
   */
  useEffect(() => {
    // Retrieve the token from cookies
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token=")) // Look for the "token=" prefix
      ?.split("=")[1]; // Extract the token value

    if (!token) {
      // Redirect to login if no token is found
      router.push("/login");
      return;
    }

    try {
      // Decode the token to extract user information (like email)
      const decodedToken = jwtDecode<DecodedToken>(token);

      // Ensure the token contains valid email information
      if (!decodedToken.email) {
        console.error("Decoded token does not contain an email.");
        router.push("/login");
        return;
      }

      // Update the user state with the extracted email
      setUser({ email: decodedToken.email });
    } catch (error) {
      console.error("Failed to decode token:", error); // Log decoding errors
      router.push("/login"); // Redirect to login on error
    }
  }, [router]); // Dependency ensures this runs when the router changes

  /**
   * handleLogout: Logs the user out
   * - Calls the `/api/auth` DELETE endpoint to handle logout
   * - Clears the token from cookies
   * - Redirects to the login page
   */
  const handleLogout = async () => {
    try {
      // Call the logout API endpoint
      await fetch("/api/auth", { method: "DELETE" });

      // Clear the "token" cookie
      document.cookie = "token=; Max-Age=0; path=/";

      // Redirect the user to the login page
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Display a loading screen while checking user authentication
  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <p>Loading...</p>
      </div>
    );

  // Render the dashboard once the user is authenticated
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Welcome, {user.email}!
        </p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );}

