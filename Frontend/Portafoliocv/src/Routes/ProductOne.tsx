import wizard1 from "../assets/wizard1.png";
import wizard2 from "../assets/wizard2.png";
import wizard3 from "../assets/wizard3.gif";

const ProductOne = () => {
  return (
    <div className="min-h-screen w-full bg-slate-200 flex items-start justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="w-full max-w-6xl flex flex-col gap-10 text-center sm:text-left">
        <h1 className="font-bold text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Weather Wizard
        </h1>

        {/* Row 1 */}
        <section className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed flex-1 min-w-0">
            Weather Wizard is a personal project built to strengthen my skills
            in API integration and reactive UI development. Users can search for
            different locations and instantly view weather data pulled from
            OpenWeather, with a simple flow designed for clarity and quick
            understanding. I used React to manage app state and user
            interactions, and Vite to optimize development speed and
            performance. This project reinforced core patterns used in modern
            web apps, including API consumption, loading/error handling, and
            organizing reusable components for maintainability.
          </p>

          <img
            src={wizard1}
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
            src={wizard2}
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
              <li>API integration with OpenWeather (real-time data)</li>
              <li>Reactive UI flow: search → loading → results</li>
              <li>Performance-focused setup with Vite</li>
              <li>Component-based structure and clean CSS styling</li>
            </ul>

            <p className="mt-4">
              <span className="font-semibold">Tech stack:</span> React ·
              JavaScript · CSS · Vite · OpenWeather API · Render
            </p>

            <p className="mt-3">
              <span className="font-semibold">Deployment link:</span> <br />
              <a
                href="https://weather-wizard-je9z.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                https://weather-wizard-je9z.onrender.com/
              </a>
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-col items-center justify-center md:items-center gap-6 md:gap-10 mt-12">
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed flex-1 min-w-0">
            <span className="font-serif italic text-3xl">
              How's the weather today?
            </span>
          </p>
          <img
            src={wizard3}
            className="w-full md:w-250 h-110 max-w-full  object-fill rounded-lg shadow-2xl shadow-black border-2 mt-2"
          />
        </section>
      </div>
    </div>
  );
};

export default ProductOne;