import dndnotes2 from "../assets/dndnotes2.png";
import dndnotes3 from "../assets/dndnotes3.png";
import dndnotes6 from "../assets/dndnotes6.png";

const ProductThree = () => {
  return (
    <div className="min-h-screen w-full bg-slate-200 flex items-start justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="w-full max-w-6xl flex flex-col gap-10 text-center sm:text-left">
        <h1 className="font-bold text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          DnDnotes
        </h1>

        {/* Row 1 */}
        <section className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed flex-1 min-w-0">
            DnDnotes is a campaign companion app built to centralize information
            that usually ends up scattered across notebooks, documents, or chat
            messages. It enables users to create and manage structured notes
            focused on key campaign elements—characters, quests, and
            locations—so information stays searchable and easy to update. I
            built the backend using Node.js and Express to handle server logic,
            and MongoDB to persist user and note data. On the frontend, React
            and Tailwind CSS helped me create a clean and consistent interface
            optimized for fast editing and quick reference. The project was
            deployed to production with a workflow that supports iteration while
            keeping the app stable.
          </p>

          <img
            src={dndnotes2}
            alt="DnDnotes Screenshot"
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
            src={dndnotes3}
            alt="DnDnotes Screenshot"
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
              <li>Full MERN architecture with clear frontend/backend separation</li>
              <li>Notes management focused on D&D campaign organization</li>
              <li>Database persistence using MongoDB (users + notes)</li>
              <li>Version control with GitHub and deployment on Render</li>
            </ul>

            <p className="mt-4">
              <span className="font-semibold">Tech stack:</span> React · Tailwind CSS · Node.js · Express 
              · Vite · MongoDB · GitHub · Render
            </p>

            <p className="mt-3">
              <span className="font-semibold">Deployment link:</span> <br />
              <a
                href="https://dndnotes-5faa.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                https://dndnotes-5faa.onrender.com/
              </a>
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-col items-center justify-center md:items-center gap-6 md:gap-10 mt-12">
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed flex-1 min-w-0">
            <span className="font-serif italic text-3xl">Choose your favorite background:</span>
          </p>
          <img src={dndnotes6}
          className="w-full md:w-280 md:h-120 h-65 max-w-full  object-fill rounded-lg shadow-2xl shadow-black border-2 mt-2"
          />
        </section>
      </div>
    </div>
  );
};

export default ProductThree;