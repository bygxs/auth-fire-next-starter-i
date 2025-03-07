// hooks/useAuth.ts

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Initialize user and setUser
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
      setLoading(false); // Mark loading as complete
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  return { user, setUser, loading }; // Return user, setUser, and loading
};




/* // hooks/useAuth.ts
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";



interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const useAuth = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser); // Explicitly type currentUser as User | null
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return { user, setUser }; // Return the user state and setter
}; */