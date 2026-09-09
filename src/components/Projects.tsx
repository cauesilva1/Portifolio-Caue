"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/site";

function ProjectRow({
  project,
  index,
  number,
}: {
  project: Project;
  index: number;
  number: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative border-t border-line py-8 transition-colors last:border-b hover:bg-accent-soft/30"
    >
      <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)_220px] md:items-center md:gap-8">
        <span className="font-display text-sm font-semibold tabular-nums text-muted transition-colors group-hover:text-accent">
          {number}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-fg transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
              {project.title}
            </h3>
            <span className="text-xs uppercase tracking-wider text-muted">
              {project.stack.join(" · ")}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-muted">{project.blurb}</p>

          <div className="mt-4 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline-offset-4 transition hover:underline"
              >
                Live →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted underline-offset-4 transition hover:text-fg hover:underline"
              >
                Code →
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-line md:aspect-auto md:h-28 md:w-[220px]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 220px"
            />
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.group === "featured");
  const other = projects.filter((p) => p.group === "other");

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p className="text-sm tracking-wide text-accent">Projects</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 text-muted">
            Recent product builds first — then a few earlier pieces that show how I got here.
          </p>
        </motion.div>

        <div>
          {featured.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-2 font-display text-xl font-semibold text-fg">
            Also worth seeing
          </h3>
          <p className="mb-6 text-sm text-muted">
            SaaS, open-source tooling, AI, and earlier university work.
          </p>
          {other.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              number={String(featured.length + index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
