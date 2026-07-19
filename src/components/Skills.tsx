"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-sm tracking-wide text-accent">Skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            What I work with
          </h2>
          <p className="mt-4 text-muted">
            A concise stack map for recruiters — tools I use to ship production UI.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <h3 className="font-display text-lg font-semibold text-fg">
                {group.label}
              </h3>
              <div className="hairline my-4" />
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
