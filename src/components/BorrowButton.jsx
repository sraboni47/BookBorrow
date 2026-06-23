"use client";

import { toast } from "react-toastify";

export default function BorrowButton() {
  const handleBorrow = () => {
    toast.success("Book borrowed successfully!");
  };

  return (
    <button
      onClick={handleBorrow}
      className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
    >
      Borrow This Book
    </button>
  );
}