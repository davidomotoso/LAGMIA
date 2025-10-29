import Navbar from "@/components/Navbar"
import banner from "@/../public/vendor_banner.png"
import  Image from "next/image"                                          

const page = () => {
  return (
    <>
    <Navbar />
    <section>
        <section className="bg-white p-2 rounded-sm group">
            <Image className="rounded-sm group-hover:scale-[1.005] duration-300" src={banner} alt="vendor banner"/>
        </section>
    </section>
    </>
  )
}

export default page