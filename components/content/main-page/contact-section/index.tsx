import { cn } from '@/lib/utils'
import React from 'react'
import { isMobile } from 'react-device-detect'
import Title from './title'
import ContactList from './contact-list'

export default function ContactSection({
  className
}: {
  className?: string
}) {
  return (
    <section id="contact" className={cn(
      'relative w-full flex flex-col gap-6 items-center justify-center px-4 overflow-hidden mb-28', 
      isMobile ? "px-4" : "md:px-28",
      className
    )}>
      <Title />
      <ContactList />
    </section>
  )
}
