'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Target, Users, TrendingUp } from 'lucide-react'

export function StartupSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Users, label: 'Global Clients', value: '25+' },
    { icon: TrendingUp, label: 'Projects Delivered', value: '50+' },
    { icon: Target, label: 'Core Industries', value: '6' },
  ]

  return (
    <section
      id="startup"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Smoke Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] smoke-animation" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px] smoke-animation" style={{ animationDelay: '-7s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muted/20 rounded-full blur-[120px] smoke-animation" style={{ animationDelay: '-3s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Current Focus
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            The Venture
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="vintage-border bg-card/50 backdrop-blur-sm p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm tracking-wider uppercase">
                      Digital Agency
                    </span>
                    <h3 className="font-serif text-2xl text-foreground">
                      Webstan
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  An elite digital agency forging high-end web experiences, branding, 
                  and sophisticated UI/UX. We don&apos;t just build websites; we build 
                  digital empires.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  From concept to deployment, every project is crafted with precision 
                  and delivered with pride. The empire continues to expand.
                </p>

                <a
                  href="#scheduler"
                  className="group inline-flex items-center gap-3 text-primary hover:text-[#d4b87a] transition-colors"
                >
                  <span className="tracking-wider uppercase text-sm">Learn More</span>
                  <span className="w-8 h-px bg-primary group-hover:w-12 transition-all" />
                </a>
              </div>

              {/* Right Content - Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-6 border border-border/50 bg-background/50"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="font-serif text-3xl text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-xs tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-primary/20 -translate-y-4 translate-x-4" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-primary/20 translate-y-4 -translate-x-4" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
