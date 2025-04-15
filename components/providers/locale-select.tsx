"use client"

import { type VariantProps } from 'class-variance-authority'
import React, { useTransition } from 'react'
import { Button, type buttonVariants } from '../ui/button'
import { Select, SelectContent, SelectItem } from '../ui/select'
import { cn } from '@/lib/utils'
import { SelectTrigger } from '@radix-ui/react-select'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'
import { type Locale, locales } from '@/i18n/config'
import {usePathname, useRouter} from '@/i18n/navigation';
import { useParams } from 'next/navigation'

export default function LocaleSelect({
  variant = "outline",
  className
}: {
  variant?: VariantProps<typeof buttonVariants>["variant"]
  className?: string
}) {
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();
  
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onChange(value: string) {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { scroll: false, locale: nextLocale }
      );
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
      <SelectContent className='uppercase w-fit min-w-0 bg-transparent shadow-none'>
        {locales.map(lang => (
          <SelectItem key={lang} value={lang}>{lang}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
