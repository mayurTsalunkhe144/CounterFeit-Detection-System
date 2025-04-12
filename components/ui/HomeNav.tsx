"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
const HomeNav = () => {
  const isDashboard = usePathname().includes("dashboard");
  return (
    <div>
      <nav className="bg-[#0c1a96] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo - Left */}
            <div className="flex-shrink-0 flex items-center  justify-self-start">
              <Link href="/" className="text-xl font-bold">
                <Image
                  src="/logo.png"
                  className="object-cover"
                  alt="logo"
                  width={70}
                  height={20}
                />
              </Link>
            </div>
            {isDashboard ? (
              // Profile - Right
              <div className="flex items-center">
                <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-300"
                >
                  How It Works
                </Link>
                <Link
                  href="/about-us"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-300"
                >
                  Contact
                </Link>
              </div>
            )}
            {!isDashboard && (
              <div className="flex items-center">
                <Button className="flex justify-end">
                  <Link href="/sign-in">Sign-in</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeNav;
