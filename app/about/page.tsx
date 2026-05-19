import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, ${siteConfig.role}.`
};

const manifestoItems = [
  {
    number: "01",
    title: "Real Workflow Matters",
    text:
      "Good systems should adapt to business operations, not force operations to adapt to software."
  },
  {
    number: "02",
    title: "Clean and Reliable Data",
    text:
      "Warehouse, logistics, and inventory systems depend on stable synchronization and predictable behavior."
  },
  {
    number: "03",
    title: "Simple, Scalable Architecture",
    text:
      "Maintainable systems make future improvements, automation, and scaling easier."
  }
];

const stackTags = [
  "Laravel",
  "Django",
  "Postgresql",
  "Vue Js",
  "NextJs",
  "Redis",
  "Docker",
  "REST API",
  "PWA"
];

const businessTripImages = [
  "/business_trip/1.jpg",
  "/business_trip/2.jpg",
  "/business_trip/3.jpg"
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100svh-6rem)] bg-[#f7f7f4] bg-[linear-gradient(#e3e6e1_1px,transparent_1px),linear-gradient(90deg,#e3e6e1_1px,transparent_1px)] bg-[size:28px_28px] text-[#171b1d]">
        <section className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.35fr_0.65fr] lg:px-12">
          <div>
            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-normal sm:text-6xl lg:text-7xl">
              Core
              <br />
              Architecture
            </h1>
          </div>

          <article className="border border-[#171b1d] bg-[#f4f4f2] p-5 shadow-[4px_4px_0_#171b1d] sm:p-7 lg:ml-auto lg:w-full lg:max-w-2xl lg:translate-x-20 xl:translate-x-32">
            <p className="max-w-3xl text-sm leading-7 text-[#171b1d]">
              I am a full-stack developer focused on building practical systems
              for business operations, logistics, inventory, ordering, and
              automation. My work sits close to real workflows, where reliable
              data, clear APIs, and maintainable interfaces matter every day.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#171b1d]">
              Today, I work on operational systems between China and Cambodia,
              leading project work around backend services, synchronization,
              shipment tracking, warehouse flows, and tools that help teams move
              faster with fewer manual steps.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-[#171b1d] pt-5">
              {stackTags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="border border-[#c3cbbf] bg-[#f7f7f4] px-2 py-1 font-mono text-[9px] font-black uppercase text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12">
          <div className="bg-[#171b1d] px-6 py-10 text-[#f7f7f4] sm:px-10 sm:py-14 lg:px-16">
            <blockquote className="max-w-5xl text-3xl font-black uppercase italic leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">
              "A developer builds systems that make{" "}
              <span className="text-[#00f050]">real work</span> easier to run."
            </blockquote>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-6 px-5 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-[0.38fr_0.62fr] lg:px-12">
          <div className="border border-[#171b1d] bg-[#f4f4f2] p-5 shadow-[4px_4px_0_#171b1d] sm:p-7">
            <span className="mb-5 inline-flex bg-[#171b1d] px-2 py-1 font-mono text-[10px] font-black uppercase text-white">
              Business Trip
            </span>
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
              China
              <br />
              Alibaba
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Business trip to China and Alibaba to observe real operations,
              supplier workflows, logistics processes, and the systems behind
              cross-border commerce.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {businessTripImages.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden border border-[#171b1d] bg-[#f4f4f2] shadow-[4px_4px_0_#171b1d]"
              >
                <Image
                  src={image}
                  alt={`China and Alibaba business trip photo ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-0 px-5 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-[0.42fr_0.58fr] lg:px-12">
          <div className="border border-[#171b1d] bg-[#e8e8e6] p-5 sm:p-7">
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
              System
              <br />
              Manifesto
            </h2>

            <div className="mt-8 grid gap-5">
              {manifestoItems.map((item) => (
                <article key={item.number} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="font-mono text-[10px] font-black text-[#007a25]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-mono text-[10px] font-black uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="border border-l-0 border-[#171b1d] bg-[#f4f4f2] p-5 sm:p-7 max-lg:border-l">
            <div className="border border-dashed border-[#171b1d] p-5 sm:p-8">
              <pre className="overflow-x-auto bg-[#ededeb] p-5 font-mono text-[10px] font-bold leading-5 text-[#171b1d]">
{`function BuildSystem(requirements) {

    const stack = [
        "Laravel",
        "Django",
        "PostgreSQL"
    ];

    return requirements.map((workflow) => {

        if (workflow.needsAutomation) {
            return Deploy(
                "API",
                "QUEUE",
                "SYNC"
            );
        }

        return Optimize(workflow);
    });
}`}
              </pre>

              <div className="mt-6 flex flex-wrap gap-2">
                {stackTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#c3cbbf] bg-[#f7f7f4] px-2 py-1 font-mono text-[9px] font-black uppercase text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
