import Navbar from "@/components/Navbar";
import ValidateDelete from "./ValidateDelete";
import Nav from "../Nav";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-neutral-dark flex items-start justify-between">
        <Nav/>
        <ValidateDelete/>
      </section>
    </>
  );
};

export default page;
