import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              BookBorrow
            </h2>

            <p className="text-gray-300 leading-7">
              Discover, borrow, and explore books from different
              categories. Your next favorite book is just a click away.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <Link href="/">Home</Link>
              <Link href="/books">All Books</Link>
              <Link href="/profile">My Profile</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-300">
              Email: support@bookborrow.com
            </p>

            <p className="text-gray-300 mt-2">
              Phone: +880 1234-567890
            </p>

            <p className="text-gray-300 mt-2">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 BookBorrow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}