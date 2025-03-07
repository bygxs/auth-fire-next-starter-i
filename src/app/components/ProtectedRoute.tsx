// components/ProtectedRoute.tsx

"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth(); // Get user and loading state from useAuth
  const router = useRouter(); // Initialize Next.js router
  const [isRedirecting, setIsRedirecting] = useState(false); // Prevent multiple redirects

  // Handle redirection for unauthenticated users
  useEffect(() => {
    if (!loading && !user && !isRedirecting) {
      // If loading is done and no user is detected, redirect to /login
      setIsRedirecting(true); // Prevent multiple redirects
      router.push("/login");
    }
  }, [user, loading, router, isRedirecting]);

  // If still loading, show nothing (or a loader if you prefer)
  if (loading) return null;

  // Render children if authenticated, otherwise return null (redirect handled above)
  return user ? <>{children}</> : null;
};

export default ProtectedRoute;







/* // components/ProtectedRoute.tsx
"use client"

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth(); // Get the user state from the useAuth hook
  const router = useRouter(); // Initialize the Next.js router
  const [isReady, setIsReady] = useState(false); // Track if the component is ready

  // Add a short delay to ensure Firebase has time to update the user state
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!user) {
        router.push("/login"); // Redirect to login if no user is detected
      }
      setIsReady(true); // Mark the component as ready after the delay
    }, 1500); // Wait 1 second before checking

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, [user, router]);

  // If the component isn't ready yet, don't render anything
  if (!isReady) return null;

  // Render the children (protected content) if the user is logged in
  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
  */