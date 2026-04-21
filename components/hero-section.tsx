'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl smoke-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl smoke-animation" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase border-b border-primary/30 pb-1">
              By Order of the Architect
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none mb-2 text-balance font-bold"
          >
            <span className="text-primary">OM</span>{' '}
            <span className="text-foreground">PANDEY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground text-lg sm:text-xl tracking-wider mb-8"
          >
            Founder of Webstan | Full-Stack Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-lg mb-10 leading-relaxed"
          >
            I build high-performance digital systems and lead Webstan to forge 
            industry-leading brands. From complex Python backends to cinematic 
            frontends, I execute with precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#scheduler"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,98,0.4)]"
            >
              <span className="relative z-10">Fix a Meeting</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#d4b87a] to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center px-8 py-4 border border-primary/50 text-foreground font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:border-primary hover:text-primary"
            >
              See My Work
            </a>
          </motion.div>
        </motion.div>

        {/* Portrait Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-primary/20" />
            <div className="absolute -inset-8 border border-primary/10" />
            
            {/* Portrait Container with Cinematic Filter */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden">
              {/* Portrait Image */}
              <img
                src="/images/om-pandey-portrait.jpeg"
                alt="Om Pandey - The Architect"
                className="absolute inset-0 w-full h-full object-cover object-top sepia-[0.8] contrast-[1.3] brightness-[0.9]"
              />
              
              {/* Grain Overlay */}
              <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
              
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-transparent" />
              
              {/* Name Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="font-serif text-xl sm:text-2xl text-primary font-bold tracking-wider text-center">
                  OM PANDEY
                </h3>
                <p className="text-muted-foreground text-xs tracking-widest uppercase text-center mt-1">
                  Founder of Webstan | Full-Stack Engineer
                </p>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
