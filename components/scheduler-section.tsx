'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, Mail, Phone } from 'lucide-react'

export function SchedulerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="scheduler"
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
            Let&apos;s Talk Business
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Arrange a Meeting
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The door is always open for those with vision. Schedule a consultation 
            to discuss your next venture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="vintage-border bg-card/30 backdrop-blur-sm p-8 h-full">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Direct Channels
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">
                      Electronic Post
                    </h4>
                    <a
                      href="mailto:omkumar947062@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      omkumar947062@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">
                      Direct Line
                    </h4>
                    <a
                      href="tel:+919470624800"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9470624800
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-muted-foreground">
                      Mon - Fri: 11:00 AM - 5:00 PM GMT
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-muted-foreground text-sm italic">
                  &ldquo;Time is the currency of the ambitious. Spend it wisely.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Calendly Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="vintage-border bg-card/30 backdrop-blur-sm p-8 h-full min-h-[400px] flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-2xl text-foreground">
                  Schedule Directly
                </h3>
              </div>

              {/* Calendly Inline Widget */}
              <div className="flex-1 border border-border/50 bg-[#0a0a0a] overflow-hidden min-h-[400px]">
                <iframe
                  src="https://calendly.com/omkumar947062/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=e5e5e5&primary_color=c9a962"
                  title="Schedule a meeting with Om Pandey"
                  className="w-full h-full min-h-[400px] border-0"
                  loading="lazy"
                />
              </div>

              {/* Alternative CTA */}
              <div className="mt-6">
                <a
                  href="https://calendly.com/omkumar947062/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,98,0.4)]"
                >
                  <span>Open Scheduling Page</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
