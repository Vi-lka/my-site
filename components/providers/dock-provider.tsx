"use client"

import { BoxesIcon, BriefcaseIcon, HouseIcon } from 'lucide-react';
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
import { CONTACTS } from '@/lib/consts';

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
      { href: `/${locale}/#projects`, icon: BriefcaseIcon, label: t("projects") },
      { href: `/${locale}/#contact`, icon: Icons.email, label: t("contact") },
    ],
    contact: {
      social: {
        phone: {
          name: t("phone"),
          url: CONTACTS.tel.href,
          icon: Icons.phone
        },
        email: {
          name: t("send-email"),
          url: CONTACTS.email.href,
          icon: Icons.email,
        },
        GitHub: {
          name: "GitHub",
          url: CONTACTS.github.href,
          icon: Icons.github,
        },
        telegram: {
          name: "Telegram",
          url: CONTACTS.telegram.href,
          icon: Icons.telegram,
        }
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
                  <Tooltip delayDuration={150}>
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
                      <p className='font-mono'>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              
              {/* <Separator 
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
              ))} */}

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
                    <p className='font-mono'>{t("theme")}</p>
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
                    <p className='font-mono'>{t("locale")}: <span className='uppercase'>{locale}</span></p>
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
