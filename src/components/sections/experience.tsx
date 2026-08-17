"use client";

import Link from "next/link";
import React from "react";
import { Bot, Code2, ExternalLink } from "lucide-react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Software Developer",
    company: "TeamLease RegTech",
    companyUrl: "https://www.teamleaseregtech.com/",
    period: "Aug 2026 - Present",
    type: "Current role",
    points: [
      "Working on software development tasks in a professional product environment.",
      "Building and maintaining web application features with a focus on reliability.",
      "Collaborating with the team on debugging, implementation, and clean delivery.",
    ],
    stack: [
      "Software Development",
      "Web Apps",
      "Debugging",
      "Team Collaboration",
    ],
    icon: Code2,
    accent: "bg-emerald-500",
    textAccent: "text-emerald-600 dark:text-emerald-300",
  },
  {
    role: "AI Full Stack Web Intern",
    company: "PRiMUS Techsystems Pvt. Ltd.",
    companyUrl: "https://primustechsys.com/",
    period: "Jan 2026 - Apr 2026",
    type: "Internship",
    points: [
      "Worked on AI features including embeddings and a RAG chatbot for intelligent information retrieval.",
      "Contributed to 3 different projects during the internship duration across frontend and backend tasks.",
      "Worked with React, Node.js, .NET, AWS, MySQL, and PostgreSQL for integration and debugging.",
    ],
    stack: [
      "AI",
      "Embeddings",
      "RAG Chatbot",
      "React",
      "Node.js",
      ".NET",
      "AWS",
      "MySQL",
      "PostgreSQL",
    ],
    icon: Bot,
    accent: "bg-cyan-500",
    textAccent: "text-cyan-600 dark:text-cyan-300",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative z-[1] min-h-screen scroll-mt-24 px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <Link href="#experience">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              Experience
            </h2>
          </BoxReveal>
        </Link>

        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-slate-600 dark:text-neutral-300">
          Professional experience across AI-assisted full-stack web
          development and software development in product-focused teams.
        </p>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-300 dark:bg-white/15 md:block" />

          <div className="space-y-6">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <article
                  key={experience.role}
                  className="relative grid gap-4 md:grid-cols-[44px_1fr]"
                >
                  <div className="hidden md:block">
                    <div
                      className={cn(
                        "relative z-[1] flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 shadow-sm dark:border-white/10 dark:bg-black/80 dark:text-white",
                        index === 0 && "mt-1"
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg border border-slate-300/80 bg-white/85 backdrop-blur-sm transition-colors hover:border-slate-500 dark:border-white/10 dark:bg-black/45 dark:hover:border-white/30">
                    <div className={cn("h-1 w-full", experience.accent)} />
                    <div className="p-5 md:p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 dark:border-white/10 dark:bg-black/40 dark:text-white md:hidden">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p
                              className={cn(
                                "text-sm font-semibold",
                                experience.textAccent
                              )}
                            >
                              {experience.period}
                            </p>
                            <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                              {experience.role}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-neutral-400">
                              {experience.company} | {experience.type}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-md border border-slate-300/80 bg-white/80 px-4 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/30 dark:hover:bg-white/10"
                        >
                          View Company
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className="mt-5 grid gap-3">
                        {experience.points.map((point) => (
                          <div key={point} className="flex gap-3">
                            <span
                              className={cn(
                                "mt-2 h-2 w-2 shrink-0 rounded-full",
                                experience.accent
                              )}
                            />
                            <p className="text-sm leading-6 text-slate-600 dark:text-neutral-300 md:text-base">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-slate-300/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
