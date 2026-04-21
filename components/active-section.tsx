'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, GitBranch, Clock, Zap } from 'lucide-react'

const activeProjects = [
  {
    name: 'Brahmastra',
    subtitle: 'The Indian Stock Market Intelligence',
    description: 'A high-precision financial advisory engine utilizing technical indicators and sentiment analysis to decode the Indian markets.',
    progress: 85,
    status: 'Finalizing Phase 6',
    statusDetail: 'Frontend Orchestration',
    tech: ['Python', 'FastAPI', 'Gemini AI', 'React', 'Tailwind'],
    lastUpdate: '1 hour ago',
    isLive: true,
    record: null,
  },
  {
    name: 'Nexfounder',
    subtitle: 'Phase 1 Complete',
    description: 'A comprehensive ecosystem for founders. Successfully deployed an authenticated dashboard with Supabase, Google OAuth, and a protected 5-section architecture (Roadmap, Community, Directory, Guidance, Profile).',
    progress: 50,
    status: 'Moving to Phase 2',
    statusDetail: 'AI Roadmap Generation',
    tech: ['Next.js 16', 'Supabase', 'Google OAuth', 'TypeScript'],
    lastUpdate: '2 hours ago',
    isLive: true,
    record: 'Navigated Next.js 16 breaking changes (Middleware/Proxy architecture) and optimized system-level storage constraints for deployment.',
  },
]

export function ActiveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="active"
      ref={ref}
      className="relative py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Work in Progress
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Active Operations
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {activeProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="vintage-border bg-card/30 backdrop-blur-sm p-6 sm:p-8 hover:bg-card/50 transition-all duration-500 gold-glow-hover">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Project Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Code2 className="w-5 h-5 text-primary" />
                      <h3 className="font-serif text-xl sm:text-2xl text-foreground flex items-center gap-2">
                        {project.name}
                        {project.isLive && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs tracking-wider uppercase">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            Live
                          </span>
                        )}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs tracking-wider uppercase">
                        {project.status}: {project.statusDetail}
                      </span>
                    </div>
                    {/* Subtitle */}
                    <p className="text-primary/80 text-sm tracking-wider uppercase mb-3 ml-8">
                      — {project.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    {/* Technical Record */}
                    {project.record && (
                      <div className="mb-4 p-3 bg-secondary/50 border-l-2 border-primary/50">
                        <span className="text-primary text-xs tracking-wider uppercase block mb-1">The Record</span>
                        <p className="text-muted-foreground text-sm italic">
                          {project.record}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary border border-primary/20 text-muted-foreground text-xs tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress & Stats */}
                  <div className="lg:w-64 space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-primary font-medium">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${project.progress}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                          className="h-full bg-gradient-to-r from-primary to-[#d4b87a]"
                        />
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{project.lastUpdate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4" />
                        <span>main</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-xs text-primary tracking-wider uppercase">Live</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
