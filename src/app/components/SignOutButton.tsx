// components/SignOutButton.tsx

import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { useAuth } from "../../hooks/useAuth";

const SignOutButton = () => {
  const router = useRouter();
  const { setUser } = useAuth(); // Get setUser from the auth context

  console.log("setUser in SignOutButton:", setUser); // Debug log

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      if (setUser) {
        setUser(null); // Clear the user state in the auth context
      } else {
        console.error("setUser is undefined!");
      }
      router.push("/auth"); // Redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
      alert("An error occurred while signing out. Please try again.");
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;