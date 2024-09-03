import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Photo from "@/components/layout/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              <span className=" mr-[-1.5rem]">Hello,</span> I'm
              <br /> <span className="text-accent">Adrian Cura</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in creating dynamic and responsive web applications.
              My passion for coding drives me to explore the foundations of
              backend development to enhance my own projects and continuously
              expand my skill set.
            </p>
            {/* socias */}
            <div className="mb-8 xl:mb-8 flex gap-6 text-xl justify-center">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Adrian-Cura"
                className="border rounded-full  border-y-accent p-3 hover:text-primary hover:bg-accent-hover hover:border-black transition-all duration-300 ease-in-out"
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/adrian-cura/"
                className="border rounded-full  border-y-accent p-3 hover:text-primary hover:bg-accent-hover hover:border-black transition-all duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          {/* photo */}
          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
