"use client"; // Mark this as a client component

import { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import { ThemeToggle } from "./theme-toggle";
import { version } from "../../../package.json";
import { useAuth } from "../../hooks/useAuth"; // Import the custom hook
import SignOutButton from "./SignOutButton"; // Import the SignOutButton

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth(); // Get the current user state

  return (
    <header className="sticky text-gray-900 dark:text-gray-100 top-0 z-50 shadow-md py-2 px-4 bg-gradient-to-r from-teal-100 via-red-200 to-blue-300 dark:from-yellow-900 dark:via-green-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Branding */}
        <div className="text-xl font-bold">Auth Fire Next MVP I </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            v{version}
          </span>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transition duration-300 ease-in-out transform hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105"
        >
          <span className="block w-8 h-1 bg-gray-700 dark:bg-gray-100 mb-1 transition duration-300 ease-in-out"></span>
          <span className="block w-8 h-1 bg-gray-700 dark:bg-gray-100 mb-1 transition duration-300 ease-in-out"></span>
          <span className="block w-8 h-1 bg-gray-700 dark:bg-gray-100 transition duration-300 ease-in-out"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="relative group">
              <Link href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 rounded-lg transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-bold text-lg">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link href="/about" className="block px-4 py-2 text-gray-600 dark:text-gray-300 rounded-lg transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-bold text-lg">
                About
              </Link>
            </li>
            <li className="relative group">
              <Link href="/contact" className="block px-4 py-2 text-gray-600 dark:text-gray-300 rounded-lg transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-bold text-lg">
                Contact
              </Link>
            </li>
            {user && (
              <li className="relative group">
                <SignOutButton />
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-12 left-0 w-full bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link href="/" className="block text-gray-600 dark:text-gray-300 font-bold text-lg transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block text-gray-600 dark:text-gray-300 font-bold text-lg transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg px-4 py-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block text-gray-600 dark:text-gray-300 font-bold text-lg transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg px-4 py-2">
                  Contact
                </Link>
              </li>
              {user && (
                <li>
                  <SignOutButton />
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
