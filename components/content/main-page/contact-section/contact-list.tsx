"use client"

import { Icons } from '@/components/Icons'
import { CONTACTS } from '@/lib/consts'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      id: "Telephone",
      title: CONTACTS.tel.title,
      icon: Icons.phone,
      href: CONTACTS.tel.href
    },
    {
      id: "Email",
      title: CONTACTS.email.title,
      icon: Icons.email,
      href: CONTACTS.email.href
    },
    {
      id: "GitHub",
      title: CONTACTS.github.title,
      icon: Icons.github,
      href: CONTACTS.github.href
    },
    {
      id: "Telegram",
      title: CONTACTS.telegram.title,
      icon: Icons.telegram,
      href: CONTACTS.telegram.href
    }
  ]

  const [hasAnimated, setHasAnimated] = React.useState(false);
  
  React.useEffect(() => {
    const animated = sessionStorage.getItem('hasSeenContactListAnimation');
    if (animated) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, []);

  const containerVariants = {
    hidden: {
      width: "40px",
      opacity: 0,
    },
    show: {
      width: "100%",
      opacity: 1,
      transition: {
        delay: hasAnimated ? 0 : 0.7,
        duration: 0.4,
        type: 'tween',
        when: "beforeChildren",
        delayChildren: 0.1,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="w-full flex items-center justify-center">
      <motion.div 
        initial={hasAnimated ? "show" : "hidden"}
        whileInView={"show"}
        variants={containerVariants}
        viewport={{ once: true }}
        onAnimationComplete={() => {
          if (!hasAnimated) {
            sessionStorage.setItem('hasSeenContactListAnimation', 'true');
            setHasAnimated(true);
          }
        }}
        className="relative w-full border border-foreground rounded-md md:p-6 p-4 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      >
        {/* Corner decorations */}
        <div className="absolute top-0.5 left-0.5 w-4 h-4 border-t-2 border-l-2 border-foreground rounded-tl-xs"></div>
        <div className="absolute top-0.5 right-0.5 w-4 h-4 border-t-2 border-r-2 border-foreground rounded-tr-xs"></div>
        <div className="absolute bottom-0.5 left-0.5 w-4 h-4 border-b-2 border-l-2 border-foreground rounded-bl-xs"></div>
        <div className="absolute bottom-0.5 right-0.5 w-4 h-4 border-b-2 border-r-2 border-foreground rounded-br-xs"></div>

        {/* Contact information */}
        <motion.div 
          className="flex flex-col gap-5"
          variants={contentVariants}
        >
          {contacts.map(({icon: ContactIcon, ...contact}) => (
            <motion.div key={contact.id} variants={itemVariants}>
              <Link 
                passHref href={contact.href} target='_blank'
                className="relative flex items-center z-10 group transition-transform duration-300 hover:translate-x-1"
              >
                <div className="w-10 h-10 flex-none flex items-center justify-center border border-foreground/30 rounded-md mr-4 group-hover:border-foreground group-hover:bg-foreground/5 transition-colors duration-300">
                  <ContactIcon className="h-5 w-5 text-foreground" />
                </div>
                <div className='grid'>
                  <p className="text-foreground/50 text-xs uppercase mb-1 group-hover:text-foreground/70 transition-colors duration-300">{contact.id}</p>
                  <p className="text-foreground font-mono text-xs sm:text-sm md:text-base truncate">{contact.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
