
const About = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl mt-24 flex flex-col gap-2 text-center sm:text-left ">
        <h1 className="font-bold text-black-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Skills
        </h1>
        <section className="flex flex-row w-full items-center justify-center gap-5 mb-4">
          <p className="text-black-500 text-base sm:text-lg leading-relaxed flex-5 text-justify">
            I have experience in programming languages such as Typescript and
            JavaScript, as well as proficiency in software development tools and
            frameworks. I am skilled in problem-solving, critical thinking, and
            effective communication, which allows me to work well in team
            environments and contribute to successful project outcomes.
            <br />
            Additionally, I have a strong background in product design, with
            expertise in 3D modeling, prototyping, and product development. I am
            passionate about creating innovative and user-friendly solutions
            that meet the needs of users while also being aesthetically pleasing
            and functional.
          </p>
        </section>

        <section className="space-y-4 mb-4">
          <h2 className="text-2xl font-bold">Technical Skills</h2>

          <div className="grid gap-6  lg:gap-x-2 lg:gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Frontend */}
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Frontend</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend / Databases */}
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">
                Backend / Databases
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Node.js / Express (DnDnotes)</li>
                <li>MongoDB (DnDnotes)</li>
                <li>MySQL</li>
              </ul>
            </div>

            {/* Tools / DevOps */}
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Tools / DevOps</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Git</li>
                <li>GitHub</li>
                <li>Deployment on Render</li>
              </ul>
            </div>

            {/* Industrial Automation (PLC) */}
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">
                Industrial Automation (PLC)
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Allen-Bradley RSLogix 500</li>
              </ul>
            </div>

            {/* CAD / Engineering */}
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">
                CAD / Engineering
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>SolidWorks</li>
              </ul>
            </div>

            {/* Siemens PLC */}
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Siemens PLC</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>STEP 7 MicroWIN</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About