import Image from "next/image";
import logo from "@/../public/LAGMIA-auth.png";
import Link from "next/link";

const auth = () => {
  return (
    <section className="text-neutral-dark w-full grid place-content-center h-screen bg-white absolute top-0 left-0">
      <section className="space-y-7 w-[27rem]">
        <div className="space-y-1 text-center">
          <Image
            className="mx-auto mb-2 size-40 object-cover"
            src={logo}
            alt="lagmia logo"
            priority
          />
          <h2 className="font-semibold text-2xl">Welcome to Lagmia</h2>
          <p>Input your e-mail to log in or create a Lagmia account.</p>
        </div>
        <form className="space-y-10">
          <label className="font-medium" htmlFor="auth">
            Email
          </label>
          <input
            className="w-full border rounded-sm border-gray-400 p-4 focus:outline-primary/50 mt-1"
            title="Enter email"
            name="auth"
            id="auth"
            type="email"
            autoComplete="on"
            placeholder="Enter email..."
            required
          />
          <button
            className="bg-primary/85 hover:bg-primary duration-150 cursor-pointer text-white font-medium text-center w-full p-4 rounded-sm"
            title="submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
      <Link href={"vendor"} className="text-primary hover:underline mt-2">
        Sell on Lagmia
      </Link>
    </section>
  );
};

export default auth;
