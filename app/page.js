import Image from "next/image";
import Link from "next/link";
import TypedHero from "@/components/TypedHero";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[60vh] mt-10 w-full">
        <div className="bg-amber-50 flex flex-col gap-4 items-center justify-center py-8 md:py-0">
          <TypedHero />
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full md:w-auto items-center">
            <Link href="/generate">
              <button className='bg-green-400 p-1.5 px-3 rounded-md cursor-pointer font-bold hover:bg-green-500 transition-all duration-150 w-full md:w-auto'>Try Now</button>
            </Link>
            <Link href="https://github.com/AadeeshRS/Trimzy">
              <button className='bg-green-400 p-1.5 px-3 rounded-md cursor-pointer font-bold hover:bg-green-500 transition-all duration-150 w-full md:w-auto'>Github</button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-start relative h-64 md:h-auto">
          <Image className="mix-blend-darken" src={"/vector.png"} alt="Vector Image" fill={true} />
        </div>
        <div className="flex md:hidden justify-center mt-6">
          <Image src={"/vector.png"} alt="Vector Image" width={200} height={120} className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
