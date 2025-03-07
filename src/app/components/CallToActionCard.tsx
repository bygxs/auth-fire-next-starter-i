// src/app/components/CallToActionCard.tsx

import Link from "next/link";

const CallToActionCard = () => {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="p-6 border rounded-lg shadow-md dark:border-gray-700 text-center bg-gradient-to-r from-blue-600 to-purple-500   ">
        <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Whatever happened, we can help you
        </h4>
        <div className="space-x-4 ">
          {/* this link is a future feature */}
          <Link
            href="/login"
            className="px-6 py-3 border rounded-lg shadow-md  border-gray-200 dark:border-gray-700 dark: bg-blue-600 text-white font-semibold  hover:bg-blue-700 transition"
          >
            login too 2
          </Link>
          <Link
            href="/auth" /*    href="/components/auth" */
            className="px-6 py-3 border rounded-lg shadow-md border-gray-200 dark:border-gray-700 bg-blue-600 text-white font-semibold  hover:bg-blue-700 transition"
          >
            Sign in | Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionCard;
