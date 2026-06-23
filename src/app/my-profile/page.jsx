"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function MyProfile() {
  const { data: session } = authClient.useSession();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-3xl shadow-sm p-8">
        
        <div className="flex justify-center">
          {session?.user?.image ? (
            <Image
  src={session.user.image}
  alt="Profile"
  width={120}
  height={120}
  className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
/>
          ) : (
            <div className="w-[100px] h-[100px] rounded-3xl bg-gray-100 border border-gray-200"></div>
          )}
        </div>

        {session?.user ? (
          <div className="text-center mt-5">
            <h2 className="text-3xl font-bold text-black">
              {session.user.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {session.user.email}
            </p>
          </div>
        ) : (
          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold">
              No Profile Found
            </h2>

            <p className="text-gray-500 mt-2">
              Please sign in to view your profile.
            </p>
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            ✏️ Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}