'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="relative py-16 border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 border border-primary/50 flex items-center justify-center mb-4 mx-auto">
              <span className="font-serif text-2xl text-primary">OP</span>
            </div>
            <span className="font-serif text-xl tracking-wider text-foreground">
              OM PANDEY
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm tracking-wider">
            &copy; 2026 Om Pandey. All Rights Reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2 tracking-wider uppercase">
            Built with Precision. Delivered with Pride. Running on Linux Mint.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
