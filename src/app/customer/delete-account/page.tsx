import Navbar from "@/components/Navbar";
import AccountNav from "../AccountNav";
import ValidateDelete from "./ValidateDelete";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-neutral-dark flex items-start justify-between">
        <AccountNav/>
        <ValidateDelete/>
      </section>
    </>
  );
};

export default page;
