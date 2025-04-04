"use client"

import { VariantProps } from 'class-variance-authority'
import React, { useTransition } from 'react'
import { Button, buttonVariants } from '../ui/button'
import { Select, SelectContent, SelectItem } from '../ui/select'
import { cn } from '@/lib/utils'
import { SelectTrigger } from '@radix-ui/react-select'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'
import { Locale, locales } from '@/i18n/config'
import { setUserLocale } from '@/lib/locale'

export default function LocaleSelect({
  variant = "outline",
  className
}: {
  variant?: VariantProps<typeof buttonVariants>["variant"]
  className?: string
}) {
  const locale = useLocale()

  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Select 
      value={locale} 
      onValueChange={onChange}
    >
      <SelectTrigger asChild>
        <Button
          className={cn(
            "relative rounded-full w-8 h-8", 
            isPending && 'pointer-events-none opacity-60',
            className
          )}
          variant={variant}
          size="icon"
        >
          <Languages />
        </Button>
      </SelectTrigger>
      <SelectContent className='uppercase w-fit min-w-0'>
        {locales.map(lang => (
          <SelectItem key={lang} value={lang}>{lang}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
