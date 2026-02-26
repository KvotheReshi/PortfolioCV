
const ProductTwo = () => {
  return (
    <div className="min-h-screen w-full bg-slate-200 flex items-start justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="w-full max-w-6xl flex flex-col gap-10 text-center sm:text-left">
        <h1 className="font-bold text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Star Wars Landing Page
        </h1>

        {/* Row 1 */}
        <section className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed flex-1 min-w-0">
            This project was built to practice designing a clean and engaging UI
            while structuring content effectively with React. The page presents
            the first six Star Wars films in a way that's easy to scan,
            highlighting key information such as movie summaries and main
            characters. I organized the UI into reusable components and used CSS
            to maintain a cohesive visual style. Vite provided a fast
            development workflow and optimized builds for a lightweight,
            responsive landing page experience.
          </p>

          <img
            src="/src/assets/starland1.png"
            alt="Weather Wizard Screenshot"
            className="w-full md:w-130 max-w-full aspect-video object-cover rounded-lg shadow-lg border-2 border-black"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, white 0%, white 55%, rgba(255,255,255,.85) 70%, rgba(255,255,255,.30) 85%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, white 0%, white 55%, rgba(255,255,255,.85) 70%, rgba(255,255,255,.25) 85%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          />
        </section>

        {/* Row 2 */}
        <section className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <img
            src="/src/assets/starland3.png"
            alt="Weather Wizard Screenshot"
            className="w-full md:w-130 max-w-full aspect-video object-cover rounded-lg shadow-lg border-2 border-black"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, white 0%, white 55%, rgba(255,255,255,.85) 70%, rgba(255,255,255,.30) 85%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, white 0%, white 55%, rgba(255,255,255,.85) 70%, rgba(255,255,255,.25) 85%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          />

          <div className="flex-1 min-w-0 text-slate-900 text-base sm:text-lg leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>Content-driven UI (movies + characters) presented clearly</li>
              <li>Dynamic interface built with React</li>
              <li>Custom styling with CSS</li>
              <li>Optimized builds and fast dev workflow with Vite</li>
            </ul>

            <p className="mt-4">
              <span className="font-semibold">Tech stack:</span> React · JavaScript · CSS · Vite · Render
            </p>

            <p className="mt-3">
              <span className="font-semibold">Deployment link:</span> <br />
              <a
                href="https://weather-wizard-je9z.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                https://starlanding.onrender.com/
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductTwo;