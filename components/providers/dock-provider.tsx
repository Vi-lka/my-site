"use client"

import { BoxesIcon, HouseIcon } from 'lucide-react';
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Dock, DockIcon } from '../magicui/dock';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';
import { ModeToggle } from './mode-toggle';
import { Portal } from '../ui/portal';
import { isMobile } from 'react-device-detect';
import { useLocale, useTranslations } from 'next-intl';
import LocaleSelect from './locale-select';
import { Icons } from '../Icons';

export default function DockProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const t = useTranslations("Dock");

  const locale = useLocale()

  const DATA = {
    navbar: [
      { href: `/${locale}/#home`, icon: HouseIcon, label: t("home") },
      { href: `/${locale}/#skills`, icon: BoxesIcon, label: t("skills") },
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/Vi-lka",
          icon: Icons.github,
        },
        email: {
          name: t("send-email"),
          url: "mailto:vitalya.permyakov155@gmail.com",
          icon: Icons.email,
        },
      },
    },
  };

  return (
    <>
      {children}
      <Portal>
        <TooltipProvider>
          <div className={cn(
            "fixed w-fit h-fit inset-x-0 z-50",
            isMobile ? "mx-auto bottom-6" : "top-1/2 -translate-y-1/2 left-6"
          )}>
            <Dock 
              orientation={isMobile ? 'horizontal' : 'vertical'} 
              direction="middle" 
              className={cn('rounded-lg border-none bg-transparent z-50', !isMobile && "backdrop-blur-none")}
              style={{ viewTransitionName: "no-transition-dock" }}
            >
              {DATA.navbar.map((item) => (
                <DockIcon key={item.label}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          isMobile ? "size-10" : "size-12",
                          "rounded-full"
                        )}
                      >
                        <item.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side={isMobile ? "top" : "right"}>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              
              <Separator 
                orientation={isMobile ? "vertical" : "horizontal"} 
                className={cn(
                  "bg-foreground/20",
                  isMobile ? "h-full" : "w-full"
                )} 
              />
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.url}
                        target='_blank'
                        aria-label={social.name}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          isMobile ? "size-10" : "size-12",
                          "rounded-full"
                        )}
                      >
                        <social.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side={isMobile ? "top" : "right"}>
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}

              <Separator 
                orientation={isMobile ? "vertical" : "horizontal"}  
                className={cn(
                  "bg-foreground/20",
                  isMobile ? "h-full" : "w-full"
                )}
              />
              <DockIcon>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <div className='flex w-fit'>
                      <ModeToggle variant="ghost" className={cn(isMobile ? "size-10" : "size-12", "rounded-full")} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side={isMobile ? "top" : "right"}>
                    <p>{t("theme")}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <DockIcon>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <div className='flex w-fit'>
                      <LocaleSelect variant="ghost" className={cn(isMobile ? "size-10" : "size-12", "rounded-full")} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side={isMobile ? "top" : "right"}>
                    <p>{t("locale")}: <span className='uppercase'>{locale}</span></p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </div>
        </TooltipProvider>
      </Portal>
    </>
  )
}
