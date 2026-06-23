"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/book.png" alt="Logo" width={36} height={36} />
            <span className="text-2xl font-bold text-black">BookApp</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-black">
  <Link href="/" className="hover:text-purple-600">
    Home
  </Link>

  <Link href="/books" className="hover:text-purple-600">
    All Books
  </Link>

  <Link href="/my-profile" className="hover:text-purple-600">
    My Profile
  </Link>
</div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4 text-black">
            {session?.user ? (
              <>
                <Link href="/my-profile" className="hover:text-purple-600">
                  My Profile
                </Link>

                <Link href="/my-profile">
                  <Image
  src={session.user.image || "/book.png"}
  alt="Profile"
  width={40}
  height={40}
  className="w-10 h-10 rounded-full object-cover border border-gray-300"
/>
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/register" className="hover:text-purple-600">
                  Sign Up
                </Link>

                <Link href="/login" className="hover:text-purple-600">
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-black"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4 border-t text-black">
            <Link href="/">Home</Link>

            <Link href="/books">All Books</Link>

            {session?.user ? (
              <>
                <Link href="/my-profile">My Profile</Link>

                <div className="flex items-center gap-2">
                  <Image
                    src={session.user.image || "/book.png"}
                    alt="Profile"
                    width={35}
                    height={35}
                    className="rounded-full border"
                  />
                  <span>{session.user.name}</span>
                </div>

                <button
                  onClick={handleLogout}
                  className="text-left text-red-500"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/register">Sign Up</Link>

                <Link href="/login">Sign In</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}