import { Link } from "react-router";
import Cvfile from "../assets/CvFile.pdf";


const Home = () => {
return (
  <div className="min-h-screen w-full bg-slate-100 px-4 pt-28 pb-16">
    <section className="mx-auto w-full max-w-6xl">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
          Efrén Castillo Morales
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-zinc-700 font-medium">
          Frontend Developer | Mechatronics Engineer | Product Design Focus
        </h2>
      </div>

      {/* Main Card */}
      <section className="mt-10 rounded-3xl bg-white shadow-xl border border-zinc-200 p-5 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
          {/* Left side */}
          <div className="w-full md:w-60 flex flex-col">
            <div className="rounded-2xl border border-zinc-300 bg-slate-50 p-3 shadow-sm">
              <img
                src="/src/assets/cvpic2.png"
                alt="Efren Castillo Morales"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a href={Cvfile} target="_blank" rel="noopener noreferrer">
              <button className="w-full rounded-xl bg-slate-800 px-5 py-3 text-white font-medium shadow hover:bg-slate-700 transition cursor-pointer">
                Download CV
              </button></a>

              <Link to="/contact">
              <button className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-100 transition cursor-pointer">
                Contact Me
              </button>
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-base sm:text-lg leading-8 text-zinc-800 text-left">
              I am a mechatronics engineer specialized in product design, with
              strong skills in teamwork, logical thinking, and organization. My
              background in engineering has allowed me to develop a structured
              approach to problem-solving, process improvement, and technical
              execution.
            </p>

            <p className="mt-5 text-base sm:text-lg leading-8 text-zinc-800 text-left">
              In addition to my industrial experience, I have expanded my
              expertise into web development, building responsive and practical
              applications with technologies such as React, JavaScript, and
              Tailwind CSS.
            </p>

            <p className="mt-5 text-base sm:text-lg leading-8 text-zinc-800 text-left">
              I am dedicated to continuous learning and professional growth, and
              I am motivated by opportunities where I can combine engineering
              knowledge, creativity, and digital innovation.
            </p>

            {/* Highlight chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "2+ Web Projects",
                "React / Tailwind",
                "Typescript",
                "API Integration",
                "MongoDB",
                "MERN Learning Path",
                "Product Design",
                "Bilingual",
                "Engineering Background",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-zinc-200 bg-slate-50 px-4 py-2 text-sm sm:text-base text-zinc-800 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
);
};

export default Home;
