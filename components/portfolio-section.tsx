'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'ShadowSpeak',
    category: 'Communication Protocol',
    description: 'A secure, anonymous messaging platform designed for uncensored digital exchange. Built with a focus on privacy and high-speed delivery.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Omkumar9470/shadowspeak2',
  },
  {
    title: 'Daily Spark',
    category: 'The Intelligence Feed',
    description: 'A curated live-content engine designed to spark productivity and daily insights. Streamlining information flow for the modern craftsman.',
    tags: ['Next.js', 'API Integration', 'Framer Motion'],
    github: 'https://github.com/Omkumar9470/Daily-Spark-live',
  },
  {
    title: 'Task Flow',
    category: 'Operational Management',
    description: 'A high-efficiency organizational tool to track projects, manage logistics, and ensure every "operation" runs on schedule.',
    tags: ['JavaScript', 'LocalStorage', 'CSS Architecture'],
    github: 'https://github.com/Omkumar9470/Task-Flow',
  },
  {
    title: 'Tripset',
    category: 'Global Navigation',
    description: 'A sophisticated travel planning architecture allowing users to map out ventures and manage itineraries with precision.',
    tags: ['React', 'Leaflet/Maps', 'Styled Components'],
    github: 'https://github.com/Omkumar9470/tripset-clone',
  },
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Established Works
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            The Ledger
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of Om Pandey&apos;s completed ventures and delivered products. 
            Each project represents a chapter in the ongoing story.
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full min-h-[320px] bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'border-primary/50 gold-glow'
                    : 'hover:border-border'
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 sm:p-8 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <span className="text-primary text-xs tracking-[0.2em] uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground mt-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 my-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 text-muted-foreground text-xs tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                  </div>

                  {/* Hover Arrow */}
                  <div
                    className={`absolute top-6 right-6 transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : 'opacity-0 -translate-x-2 translate-y-2'
                    }`}
                  >
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Corner Accents on Hover */}
                <div
                  className={`absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
