import Image from "next/image";
import { ThemeToggle } from "@/app/components/theme-toggle";
import Header from "@/app/components/Header";
import CallToActionCard from "./components/CallToActionCard";

export default function Home() {
  return (
    // <div className="bg-gradient-to-r from-purple-400 via-indigo-600 to-blue-700 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

    // <div className="bg-gradient-to-r from-blue-300 via-cyan-400 to-teal-500 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

    //   <div className="bg-gradient-to-r from-yellow-200 via-orange-500 to-red-600 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

    // <div className="bg-gradient-to-br from-gray-100 to-white dark:bg-gradient-to-br from-gray-900 to-gray-800 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

    //<div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-600">

    // <div className=" grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50 dark:bg-gray-800">

    //  <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 dark:bg-gradient-to-r dark:from-yellow-900 dark:via-green-800 dark:to-gray-700">

    <div className="bg-gradient-to-r from-teal-100 via-red-200 to-blue-300 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 dark:bg-gradient-to-r dark:from-yellow-900 dark:via-green-800 dark:to-gray-700">
      <main className="flex flex-col gap-12 max-w-4xl w-full">
     
        {/* Header Section */}
      {/*   <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            User Flow Overview
          </h1>
        </div> */}

        {/* Hero Section */}
        <section className="prose dark:prose-invert max-w-none">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-300">
            Importance of User Flow
          </h2>
          <CallToActionCard />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A well-defined user flow is essential for guiding users through a
            seamless experience. It ensures that users can easily complete tasks
            like signing up, logging in, onboarding, managing their dashboards,
            and securely signing out. A streamlined user flow improves
            engagement, reduces friction, and boosts user retention.
          </p>
       
        </section>

        {/* User Flow Details */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Authentication
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Authentication is the first step to securing user data and
              providing access to personalized experiences. There are several
              methods to authenticate users, and each method has its benefits
              based on the target audience and security requirements:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Sign Up:</strong> Collecting user details securely, such
                as name, email, and password, is the foundation of any user
                authentication process.
              </li>
              <li>
                <strong>Login:</strong> This method allows returning users to
                access their accounts easily. It ensures quick access while
                protecting user privacy.
              </li>
              <li>
                <strong>OAuth:</strong> Enabling users to sign in with their
                existing social accounts (like Google or Facebook) makes
                authentication faster and more convenient, reducing friction
                during sign-up.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Onboarding
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Onboarding is a crucial step in the user flow, as it ensures that
              new users understand the application's core features and
              functionality. A successful onboarding process can significantly
              improve user retention. Key techniques for effective onboarding
              include:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Verification:</strong> Confirming the user's identity
                through methods such as email or SMS helps to ensure security
                and trustworthiness.
              </li>
              <li>
                <strong>Profile Completion:</strong> Encouraging users to fill
                out their profile details creates a more personalized experience
                and increases engagement.
              </li>
              <li>
                <strong>Guided Tours:</strong> A step-by-step walkthrough of key
                features can help users quickly get familiar with the app,
                reducing confusion and frustration.
              </li>
            </ul>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Dashboard
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            The dashboard is a central hub where users can access all the
            essential tools, features, and insights of the application. Its
            primary purpose is to provide users with an overview of their
            activity and easy access to key actions. A well-designed dashboard
            is critical for usability and user satisfaction.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Dashboard use cases include tracking progress, managing account
            settings, and accessing key resources, all while prioritizing
            clarity and ease of navigation.
          </p>
        </section>

        {/* Sign Out Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Sign Out
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Offering a clear sign-out option is crucial for user security and
            privacy. It provides users with a sense of control over their
            session, allowing them to exit the application safely. Additionally,
            sign-out functionality should be easily accessible, ensuring that
            users can quickly log out when needed, particularly on shared or
            public devices.
          </p>
        </section>

        {/* Usage Example */}
        <section className="prose dark:prose-invert max-w-none">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Get Started
          </h3>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <code className="text-sm text-gray-900 dark:text-gray-300">
              npx create-next-app -e https://github.com/your-username/your-repo
            </code>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Clone the template and start building with a focus on user flow.
            Customize the authentication, onboarding, dashboard, and sign-out
            processes to enhance user experience and ensure smooth navigation
            for all users.
          </p>
        </section>
      </main>
    </div>
  );
}
