import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative mx-2 md:mx-4 mt-4 overflow-hidden rounded-xl">
      {/* Background Image */}
      <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full">
        <Image
          src="/banner.jpg" 
          alt="Book Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          {/* Logo */}
          <Image
            src="/book.png" 
            alt="Logo"
            width={80}
            height={80}
            className="mb-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />

          {/* Heading */}
          <h1 className="max-w-4xl text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Next Read
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-200">
            Discover amazing books from every category.
          </p>

          {/* Button */}
          <Link
            href="/books"
            className="mt-8 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-pink-600 md:px-8 md:py-4 md:text-base"
          >
            Browse Now
          </Link>
        </div>
      </div>
    </section>
  );
}
