"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result.data) {
        toast.success("Login Successful!");

        form.reset();

        router.push("/");
      }

      if (result.error) {
        toast.error(result.error.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-md">

        <h1 className="text-4xl font-bold text-center mb-10">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

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

        <div className="text-center my-6">
          <p className="text-xl">Or</p>
        </div>

        <button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full border-2 border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
>
  <div className="flex items-center justify-center gap-3">
    <FcGoogle size={22} />
    <span className="font-medium">
      Sign In With Google
    </span>
  </div>
</button>

      </div>
    </div>
  );
}