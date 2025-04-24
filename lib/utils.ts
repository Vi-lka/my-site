import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { IMAGES } from "./consts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {
    timeZone: "GMT"
  }
) {
  return new Intl.DateTimeFormat("ru-RU", {
    month: opts.month ?? "long",
    day: opts.day ?? "numeric",
    year: opts.year ?? "numeric",
    ...opts,
  }).format(new Date(date))
}

export function getStaticImage(id: typeof IMAGES[number]["id"]) {
  const finded = IMAGES.find(img => img.id === id)

  if (!finded) {
    console.error(`No image: ${id}`)
    throw new Error('No image')
  }

  return finded.data
}