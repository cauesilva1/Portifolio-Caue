"use client";

import { motion } from "framer-motion";
import { certification, education, experience } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p className="text-sm tracking-wide text-accent">Experience</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Where I&apos;ve shipped
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="border-t border-line py-10 last:border-b"
            >
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-fg">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-accent">{job.company}</p>
                  <ul className="mt-5 max-w-2xl space-y-2 text-muted">
                    {job.points.map((point) => (
                      <li key={point} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-muted md:text-right">
                  <p>{job.period}</p>
                  <p className="mt-1">{job.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-wide text-accent">Education</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-fg">
              {education.degree}
            </h3>
            <p className="mt-1 text-accent">{education.school}</p>
            <p className="mt-3 text-sm text-muted">
              {education.location} · {education.period}
            </p>
          </div>
          <div>
            <p className="text-sm tracking-wide text-accent">Certification</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-fg">
              {certification.name}
            </h3>
            <p className="mt-3 text-sm text-muted">{certification.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
