'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react'

const achievements = [
  {
    icon: Briefcase,
    title: '5+ Years',
    subtitle: 'In The Trade',
  },
  {
    icon: Award,
    title: '50+ Projects',
    subtitle: 'Delivered',
  },
  {
    icon: GraduationCap,
    title: 'Self-Taught',
    subtitle: 'Craftsman',
  },
  {
    icon: MapPin,
    title: 'Global',
    subtitle: 'Operations',
  },
]

const skills = [
  'Full-Stack Development',
  'Python Backend',
  'Linux Mint Optimization',
  'Cinematic Prompt Engineering',
  'UI/UX Design',
  'System Architecture',
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
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
            By Order of
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            The Dossier
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Dossier Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Decorative Stamp */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-full flex items-center justify-center rotate-12 opacity-50">
              <span className="font-serif text-primary text-xs tracking-wider text-center">
                CLASSIFIED
              </span>
            </div>

            <div className="vintage-border bg-card/50 backdrop-blur-sm">
              {/* Header */}
              <div className="border-b border-border/50 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 border-2 border-primary/30 flex items-center justify-center shrink-0">
                    <span className="font-serif text-3xl text-primary">OP</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-1">
                      Om Pandey
                    </h3>
                    <p className="text-primary tracking-wider uppercase text-sm">
                      Founder of Webstan | Full-Stack Engineer
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Bio */}
                <div>
                  <h4 className="text-primary text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    The Story
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This is the dossier of Om Pandey, a self-taught architect of the digital frontier.
                    As the Founder of Webstan, he tempers years of logic into digital empires.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    An expert in Python and Full-Stack Integration, with mastery over Linux Mint
                    optimization and cinematic prompt engineering. Every project a testament to the
                    belief that code, when wielded with precision, becomes art.
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-primary text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    The Record
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {achievements.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="text-center p-4 border border-border/50 bg-background/50"
                      >
                        <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-serif text-lg text-foreground">
                          {item.title}
                        </div>
                        <div className="text-muted-foreground text-xs tracking-wider uppercase">
                          {item.subtitle}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-primary text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    The Arsenal
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        className="px-4 py-2 border border-primary/30 text-foreground text-sm tracking-wider hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-border/50 p-6 sm:p-8">
                <p className="text-muted-foreground text-sm italic text-center">
                  &ldquo;In a world of frameworks, be an architect.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
