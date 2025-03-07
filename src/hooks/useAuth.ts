// hooks/useAuth.ts

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "../lib/firebase";

// Extend the Firebase User type to include additional properties
interface User extends FirebaseUser {
    bio?: string; // Add the bio property
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null); // Use the custom User type
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Here you can fetch additional user data (like bio) from your database
                const userData: User = {
                    ...currentUser,
                    bio: "", // Fetch bio from your database if available
                };
                setUser(userData); // Update user state
            } else {
                setUser(null); // No user is signed in
            }
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