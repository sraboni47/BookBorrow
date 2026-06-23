"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit clicked");

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      console.log(result);

      if (result?.data) {
        toast.success("Registration Successful!");

        form.reset();

        router.push("/login");
      }

      if (result?.error) {
        toast.error(result.error.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-md">

        <h1 className="text-4xl font-bold text-center mb-10">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Name <span className="text-red-500">*</span>
            </label>

            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full rounded-2xl"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Image URL <span className="text-red-500">*</span>
            </label>

            <input
              name="image"
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full rounded-2xl"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email <span className="text-red-500">*</span>
            </label>

            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="input input-bordered w-full rounded-2xl"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password <span className="text-red-500">*</span>
            </label>

            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-2xl"
              required
            />

            <p className="text-sm text-gray-500 mt-2">
              Must be at least 8 characters with 1 uppercase and 1 number
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button
  type="submit"
  onClick={() => console.log("Button clicked")}
  className="btn btn-primary rounded-full px-6 border-2 border-gray-300"
>
  ✓ Submit
</button>

            <button
              type="reset"
              className="btn bg-gray-100 hover:bg-gray-200 rounded-full px-6 border-2 border-gray-300"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}