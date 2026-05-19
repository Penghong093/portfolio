import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: `Education and work experience for ${siteConfig.name}.`
};

const educationItems = [
  {
    period: "2015 - 2019",
    title: "Bachelor of Information Technology",
    place: "Build Bright University"
  },
  {
    period: "2014 - 2015",
    title: "Web Development Training",
    place: "SME Cambodia"
  }
];

const experienceItems = [
  {
    period: "2024 - Present",
    title: "Backend Developer / Full Stack Developer",
    place: "DRSB Logistics - China Operations System",
    code: "CURRENT LEAD PROJECT",
    highlight: "Currently Lead Project",
    description:
      "Working on logistics and operational systems that support daily workflows between China and Cambodia, ensuring reliable data synchronization, shipment tracking, warehouse operations, and business process automation.",
    responsibilities: [
      "Develop and maintain backend systems using PHP Laravel and Postgresql",
      "Ensure accurate data synchronization between China and Cambodia operations",
      "Design and implement APIs for internal systems and operational workflows",
      "Build shipment tracking, warehouse, and logistics management features",
      "Improve system performance, reliability, and operational efficiency",
      "Analyze real business workflows and implement scalable technical solutions",
      "Maintain and upgrade existing systems with new operational features",
      "Work closely with operation teams to adapt systems based on business needs"
    ],
    tags: [
      "Laravel",
      "Postgresql",
      "Redis",
      "Docker",
      "REST API",
      "Logistics",
      "Operations",
      "NuxtJs",
      "Vue Js"
    ]
  },
  {
    period: "2021 - 2024",
    title: "Full Stack Web Developer",
    place: "KCreatix and Independent Projects",
    code: "CLIENT OPERATIONS",
    description:
      "Designed and developed scalable web applications, REST APIs, POS systems, business tools, and automation software for clients.",
    responsibilities: [
      "Designed and developed modern web applications using Laravel, Vue.js, Nuxt.js, and MySQL",
      "Built RESTful APIs for web and mobile applications",
      "Maintained and upgraded legacy systems",
      "Developed custom POS systems and business management tools",
      "Worked closely with clients to deliver scalable solutions"
    ],
    projects: [
      "MLM web application",
      "Novel and eBook platform",
      "Real estate management system",
      "Subscription eBook and motivation video platform",
      "Restaurant and eCommerce ordering systems",
      "Progressive Web App ordering system",
      "Advanced POS system with real-time inventory management"
    ],
    automation: [
      "Facebook auto posting system",
      "YouTube and Facebook auto publishing tools",
      "Media downloader applications",
      "Phone, PC, and emulator automation tools using Python and QT5"
    ],
    tags: ["Laravel", "Vue.js", "Nuxt.js", "MySQL", "REST API", "Python", "QT5"]
  },
  {
    period: "2019 - 2020",
    title: "Web Developer",
    place: "Startup Company",
    code: "STARTUP SYSTEMS",
    description:
      "Developed and maintained company websites and internal systems, improving existing Laravel and MySQL workflows with the team.",
    responsibilities: [
      "Developed and maintained company websites",
      "Improved internal systems using Laravel and MySQL",
      "Added new features and optimized old systems",
      "Collaborated with the development team on business solutions"
    ],
    tags: ["Laravel", "MySQL", "PHP", "Teamwork"]
  },
  {
    period: "2016 - 2019",
    title: "Web Developer",
    place: "Web Design 333",
    code: "WEB FOUNDATION",
    description:
      "Built websites, maintained PHP and MySQL systems, developed Laravel and Vue.js APIs, and improved system features and performance.",
    responsibilities: [
      "Built websites using WordPress, PHP, and Blogspot",
      "Maintained company systems using PHP and MySQL",
      "Developed APIs using Laravel and Vue.js",
      "Added new features and improved system performance"
    ],
    tags: ["WordPress", "PHP", "MySQL", "Laravel", "Vue.js"]
  }
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100svh-6rem)] bg-[#f7f7f4] bg-[linear-gradient(#e3e6e1_1px,transparent_1px),linear-gradient(90deg,#e3e6e1_1px,transparent_1px)] bg-[size:28px_28px] text-[#171b1d]">
        <section className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.62fr_1fr] lg:gap-14 lg:px-12">
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl">
              Work
              <br />
              History
            </h1>
            <p className="mt-5 max-w-sm font-mono text-[10px] font-bold uppercase leading-5 text-slate-700">
              Serial_Number: NPH-2014-2026
            </p>

            <div className="mt-10 border border-[#171b1d] bg-[#f4f4f2] p-5 shadow-[4px_4px_0_#171b1d]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-mono text-xs font-black uppercase text-[#007a25]">
                  Education
                </h2>
                <span className="border border-[#171b1d] px-2 py-1 font-mono text-[9px] font-black uppercase">
                  Academic
                </span>
              </div>

              <div className="grid gap-4">
                {educationItems.map((item) => (
                  <article key={item.title} className="border-t border-[#171b1d] pt-4">
                    <p className="font-mono text-[10px] font-black uppercase text-[#007a25]">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-black uppercase leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {item.place}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-10 sm:pl-14">
            <div className="absolute bottom-0 left-3 top-2 w-px bg-[#171b1d] sm:left-5" aria-hidden="true" />
            <div className="absolute left-2 top-2 h-3 w-3 border border-[#171b1d] bg-[#00f050] shadow-[3px_3px_0_#007a25] sm:left-4" aria-hidden="true" />

            <div className="grid gap-8">
              {experienceItems.map((item) => (
                <article
                  key={`${item.place}-${item.period}`}
                  className="relative border border-[#171b1d] bg-[#f4f4f2] p-5 shadow-[5px_5px_0_#171b1d] sm:p-6"
                >
                  <div className="absolute -left-[2.42rem] top-6 h-3 w-3 border border-[#171b1d] bg-[#f7f7f4] sm:-left-[3.1rem]" aria-hidden="true" />

                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] font-black uppercase text-[#007a25]">
                        {item.period}
                      </span>
                      {item.highlight ? (
                        <span className="border border-[#171b1d] bg-[#00f050] px-2 py-1 font-mono text-[9px] font-black uppercase text-[#171b1d]">
                          {item.highlight}
                        </span>
                      ) : null}
                    </div>
                    <span className="border border-[#171b1d] px-2 py-1 font-mono text-[9px] font-black uppercase">
                      {item.code}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                    {item.title} @ {item.place}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    <div>
                      <h3 className="font-mono text-[10px] font-black uppercase text-[#007a25]">
                        Responsibilities
                      </h3>
                      <ul className="mt-3 list-inside list-disc space-y-2 text-xs font-semibold uppercase leading-5 text-slate-700">
                        {item.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    {item.projects ? (
                      <div>
                        <h3 className="font-mono text-[10px] font-black uppercase text-[#007a25]">
                          Key Projects
                        </h3>
                        <ul className="mt-3 list-inside list-disc space-y-2 text-xs font-semibold uppercase leading-5 text-slate-700">
                          {item.projects.map((project) => (
                            <li key={project}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {item.automation ? (
                    <div className="mt-5 border-t border-[#171b1d] pt-5">
                      <h3 className="font-mono text-[10px] font-black uppercase text-[#007a25]">
                        Automation and Software Projects
                      </h3>
                      <ul className="mt-3 list-inside list-disc space-y-2 text-xs font-semibold uppercase leading-5 text-slate-700 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:space-y-0">
                        {item.automation.map((project) => (
                          <li key={project}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#c3cbbf] bg-[#f7f7f4] px-2 py-1 font-mono text-[9px] font-black uppercase text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
