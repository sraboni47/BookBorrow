import Image from "next/image";
import BorrowButton from "@/components/BorrowButton";

const books = {
  1: {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Story",
    image: "/bookCard1.avif",
    description:
      "The Silent Patient is a psychological thriller about Alicia Berenson, a famous painter who suddenly stops speaking after being accused of murdering her husband. The novel explores mystery, trauma, and the search for truth.",
  },

  2: {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Science",
    image: "/bookCard2.avif",
    description:
      "Atomic Habits teaches how small daily improvements can lead to remarkable long-term results. The book provides practical strategies for building good habits, breaking bad ones, and achieving personal growth.",
  },

  3: {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Tech",
    image: "/bookCard3.avif",
    description:
      "Clean Code is a must-read for software developers. It explains how to write readable, maintainable, and efficient code while following professional programming principles and best practices.",
  },

  4: {
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Story",
    image: "/bookCard4.avif",
    description:
      "The Alchemist follows the journey of a young shepherd named Santiago who dreams of discovering treasure. Along the way, he learns valuable lessons about purpose, destiny, and following one's dreams.",
  },

5: {
  title: "Deep Work",
  author: "Cal Newport",
  category: "Productivity",
   image: "bookCard5.avif",
  description:
    "Deep Work teaches how to focus without distraction in a world full of interruptions. The book provides practical strategies to improve concentration, productivity, and the ability to perform meaningful work.",
},

6: {
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
  category: "Finance",
  image: "/bookCard6.avif",
  description:
    "Rich Dad Poor Dad explains the difference between working for money and making money work for you. It introduces key financial concepts such as assets, liabilities, investing, and financial independence.",
},

7: {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  category: "Finance",
  image: "/bookCard7.avif",
  description:
    "The Psychology of Money explores how people think about money and wealth. Through real-life stories, it explains how behavior, patience, and decision-making often matter more than financial knowledge.",
},

8: {
  title: "Think and Grow Rich",
  author: "Napoleon Hill",
  category: "Self Help",
  image: "/bookCard8.avif",
  description:
    "Think and Grow Rich is one of the most influential personal development books. It highlights the power of mindset, persistence, goal setting, and desire in achieving success and financial prosperity.",
},

9: {
  title: "The 7 Habits of Highly Effective People",
  author: "Stephen R. Covey",
  category: "Leadership",
  image: "/bookCard9.avif",
  description:
    "This book presents seven powerful habits that help individuals become more effective in personal and professional life. It focuses on character development, responsibility, and long-term success.",
},

10: {
  title: "Start With Why",
  author: "Simon Sinek",
  category: "Business",
  image: "/bookCard10.avif",
  description:
    "Start With Why explains why great leaders and organizations inspire people. The book introduces the concept of the Golden Circle and shows how purpose drives success and innovation.",
},

11: {
  title: "Zero To One",
  author: "Peter Thiel",
  category: "Startup",
  image: "/bookCard11.avif",
  description:
    "Zero To One focuses on building innovative businesses that create something entirely new. Peter Thiel shares lessons on startups, competition, technology, and creating unique value in the market.",
},

12: {
  title: "The Lean Startup",
  author: "Eric Ries",
  category: "Business",
  image: "/bookCard12.avif",
  description:
    "The Lean Startup introduces a modern approach to entrepreneurship. It teaches how to test ideas quickly, learn from customer feedback, and build successful products with minimal waste.",
},


};

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  const book = books[id];

  if (!book) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold">Book Not Found</h1>
      </div>
    );
  }

  return (
   <div className="max-w-6xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Image */}
    <div>
      <Image
        src={book.image}
        alt={book.title}
        width={500}
        height={700}
        className="w-full max-w-md mx-auto rounded-xl shadow-lg object-cover"
      />
    </div>

    {/* Content */}
    <div>
      <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm mb-4">
        {book.category}
      </span>

      <h1 className="text-4xl font-bold mb-4">
        {book.title}
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        Author: {book.author}
      </p>

      <p className="text-gray-700 leading-8 mb-8">
        {book.description}
      </p>

      <BorrowButton className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
        Borrow This Book
    
      </BorrowButton>
    </div>

  </div>
</div>
  );
}
