"use client";

import Image from "next/image";
import Link from "next/link";
import featuredBooks from "@/data/featuredBooks";
import { authClient } from "@/lib/auth-client";

export default function FeaturedBooks() {
  const { data: session } = authClient.useSession();

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Featured Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredBooks.map((book) => (
          <div
            key={book.id}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={book.image}
                alt={book.title}
                width={600}
                height={800}
                className="w-full h-[420px] object-cover rounded-xl"
              />

              <span className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs border border-pink-600">
                {book.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mt-5 text-black">
              {book.title}
            </h3>

            {/* Button */}
            {session?.user ? (
              <Link href={`/books/${book.id}`}>
                <button className="w-full mt-6 border rounded-full text-black font-bold py-3 hover:bg-black hover:text-white transition">
                  View Details
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="w-full mt-6 border rounded-full bg-white text-black font-bold py-3 hover:bg-black hover:text-white transition">
                  View Details
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
