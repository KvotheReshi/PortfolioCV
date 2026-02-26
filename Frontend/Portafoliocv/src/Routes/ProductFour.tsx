import burger3 from "../assets/burger3.png";
const ProductFour = () => {
  return (
    <div className="min-h-screen w-full bg-slate-200 flex items-start justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="w-full max-w-6xl flex flex-col gap-10 text-center sm:text-left">
        <h1 className="font-bold text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Chicken Burger's Menu
        </h1>

        {/* Row 1 */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <img
            src={burger3}
            alt="Weather Wizard Screenshot"
            className="w-full h-200 md:w-140 max-w-full aspect-video object-fill rounded-lg shadow-lg border-2 border-black"
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
          <div className="flex-1 flex flex-col gap-20 min-w-0 text-justify">
            <p className="text-slate-900 text-base sm:text-lg leading-relaxed flex-1 min-w-0">
              I developed a mobile-first digital menu designed to improve the
              in-store customer experience by replacing physical menus with an
              easy-to-access QR/URL solution. The main goal was speed and
              clarity: customers should be able to scan, browse, and understand
              the menu in seconds on a small screen. The app was built with
              React and optimized with Vite for fast loading and smooth
              navigation. Tailwind CSS was used to maintain consistent styling
              and make the UI responsive across devices. The final result is a
              practical, production-ready menu that supports quick
              decision-making and improves accessibility for customers.
            </p>

            <div className="flex-1 min-w-0 text-slate-900 text-base sm:text-lg leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>QR/URL access for instant menu browsing on mobile</li>
                <li>Clean, mobile-first UI and simple navigation</li>
                <li>Optimized performance and fast builds with Vite</li>
                <li>Consistent, scalable styling using Tailwind CSS</li>
              </ul>

              <p className="mt-4">
                <span className="font-semibold">Tech stack:</span> React ·
                JavaScript · Tailwind CSS · Vite · Render
              </p>

              <p className="mt-3">
                <span className="font-semibold">Deployment link:</span> <br />
                <a
                  href="https://weather-wizard-je9z.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline break-all"
                >
                  https://chickenburgers.onrender.com/
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductFour;