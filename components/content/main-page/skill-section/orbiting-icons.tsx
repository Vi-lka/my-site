import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function OrbitingIcons({
  className
}: {
  className?: string
}) {
  return (
    <div className={cn("relative flex h-[270px] w-[270px] flex-col items-center justify-center overflow-hidden", className)}>
      <Icons.typescript className="size-5" />
      <OrbitingCircles radius={25}>
        <Icons.react className="size-4" />
        <Icons.next className="size-4" />
      </OrbitingCircles>
      <OrbitingCircles radius={50} reverse speed={1.5}>
        <Icons.css className="size-4" />
        <Icons.tailwind className="size-5" />
      </OrbitingCircles>
      <OrbitingCircles radius={75} speed={1.2}>
        <div className="w-4 aspect-square dark:bg-background bg-foreground rounded-full overflow-hidden">
          <Icons.drizzle className="fill-[#c5f74f] translate-x-[3px] size-3" />
        </div>
        <Icons.prisma className="size-4" />
        <Icons.restApi className="size-3" />
        <Icons.graphQL className="size-5" />
        <Icons.trpc className="size-4" />
        <Icons.webSocket className="size-4" />
      </OrbitingCircles>
      <OrbitingCircles radius={100} reverse speed={1.2}>
        <Icons.tanstack className="size-4" />
        <Icons.reactRouter className="size-4" />
        <Icons.zustand className="size-4" />
        <Icons.redux className="size-4" />
        <Icons.jotai className="size-5" />
        <Icons.nuqs className="size-4" />
        <Icons.threeJs className="size-4" />
        <Icons.spring className="size-4" />
        <Icons.motion className="size-4" />
      </OrbitingCircles>
      <OrbitingCircles radius={125} speed={2}>
        <Icons.docker className="size-5" />
      </OrbitingCircles>
    </div>
  );
}