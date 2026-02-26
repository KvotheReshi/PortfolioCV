import profilepic from "../assets/cvpic2.png";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-slate-100 px-4 pt-28 pb-16">
      <section className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Get in Touch
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new opportunities, projects, or
            collaborations. Feel free to reach out through any of the following
            options.
          </p>
        </div>

        {/* Main Contact Card */}
        <section className="mt-10 rounded-3xl bg-white shadow-xl border border-zinc-200 p-5 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* Left Profile Card */}
            <div className="w-full md:w-50 flex flex-col">
              <div className="rounded-2xl border border-zinc-300 bg-slate-50 p-3 shadow-sm">
                <img
                  src={profilepic}
                  alt="Efrén Castillo Morales"
                  className="w-full h-auto rounded-xl object-cover"
                />

                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Efrén Castillo Morales
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-zinc-600">
                    Frontend Developer & Mechatronics Engineer
                  </p>
                </div>
              </div>

              {/* Social icons only inside left card */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="https://github.com/KvotheReshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm hover:bg-slate-50 transition"
                >
                  <img
                    src="/src/assets/Logos/github.svg"
                    className="h-6 w-6 inline mr-2 mb-2"
                    alt="Github logo"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/efr%C3%A9n-castillo-morales-9363612b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm hover:bg-slate-50 transition"
                >
                  <img
                    src="/src/assets/Logos/linkedin.svg"
                    className="h-6 w-6 inline mr-2 mb-2"
                    alt="Linkedin logo"
                  />
                </a>
              </div>
            </div>

            {/* Right Contact Info */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                Efrén Castillo Morales
              </h2>

              <p className="mt-3 text-lg text-zinc-600">
                Frontend Developer & Mechatronics Engineer
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">Email</p>
                  <a
                    href="mailto:efrencastillo2901@hotmail.com"
                    className="mt-2 block text-base sm:text-lg text-zinc-800 hover:underline break-all"
                  >
                    efrencastillo2901@hotmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-base sm:text-lg text-zinc-800 hover:underline break-all"
                  >
                    https://linkedin.com/in/efrén-castillo-morales
                  </a>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">Phone</p>
                  <a
                    href="tel:+526671281078"
                    className="mt-2 block text-base sm:text-lg text-zinc-800 hover:underline"
                  >
                    +52 667 128 1078
                  </a>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="mt-2 text-base sm:text-lg text-zinc-800">
                    Culiacán, Sinaloa, México
                  </p>
                </div>
              </div>

              <p className="mt-8 text-zinc-600 text-sm sm:text-base">
                I typically respond within 1–2 business days.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;