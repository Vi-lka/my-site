import GlitchDialog from "@/components/special/glitch-dialog";
import MediaToggle from "@/components/special/media-toggle";
import { useTranslations } from "next-intl";

export const projects: {
  title: string;
  content: React.ReactNode;
}[] = [
  {
    title: "2025",
    content: <GMSContent />,
  },
  // {
  //   title: "Early 2023",
  //   content: (
  //     <div>
  //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //         I usually run out of copy, but when I see content this big, I try to
  //         integrate lorem ipsum.
  //       </p>
  //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //         Lorem ipsum is for people who are too lazy to write copy. But we are
  //         not. Here are some more example of beautiful designs I built.
  //       </p>
  //       <div className="grid grid-cols-2 gap-4">
  //         <img
  //           src="https://assets.aceternity.com/pro/hero-sections.png"
  //           alt="hero template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //         <img
  //           src="https://assets.aceternity.com/features-section.png"
  //           alt="feature template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //         <img
  //           src="https://assets.aceternity.com/pro/bento-grids.png"
  //           alt="bento template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //         <img
  //           src="https://assets.aceternity.com/cards.png"
  //           alt="cards template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
  // {
  //   title: "Changelog",
  //   content: (
  //     <div>
  //       <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //         Deployed 5 new components on Aceternity today
  //       </p>
  //       <div className="mb-8">
  //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //           ✅ Card grid component
  //         </div>
  //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //           ✅ Startup template Aceternity
  //         </div>
  //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //           ✅ Random file upload lol
  //         </div>
  //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //           ✅ Himesh Reshammiya Music CD
  //         </div>
  //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //           ✅ Salman Bhai Fan Club registrations open
  //         </div>
  //       </div>
  //       <div className="grid grid-cols-2 gap-4">
  //         <img
  //           src="https://assets.aceternity.com/pro/hero-sections.png"
  //           alt="hero template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //         <img
  //           src="https://assets.aceternity.com/features-section.png"
  //           alt="feature template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //         <img
  //           src="https://assets.aceternity.com/pro/bento-grids.png"
  //           alt="bento template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //         <img
  //           src="https://assets.aceternity.com/cards.png"
  //           alt="cards template"
  //           width={500}
  //           height={500}
  //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
];

function GMSContent() {
  const t = useTranslations('HomePage.projects.gms');
  
  return (
    <div>
      <p className="mb-4 md:mb-8 text-xs md:text-sm font-normal text-foreground">
        {t("title")}
      </p>
      <p className="mb-4 md:mb-8 text-xs md:text-sm font-normal text-foreground">
        {t("description")}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <GlitchDialog
          title={t("title")}
          trigger={
            <MediaToggle 
              photoSrc="/projects/gms-1.png" 
              videoSrc="/projects/gms-1-comp.mp4"
              altText={t("title")}
            />
          }
          className="p-2 sm:p-6 sm:max-w-[900px] max-h-[90%]"
        >
          <div className="w-full h-full aspect-[17/9]">
            <video
              src="/projects/gms-1-comp.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              poster="/projects/gms-1-comp.mp4"
              className="w-full h-full object-cover aspect-video rounded-sm"
            />
          </div>
        </GlitchDialog>
        {/* <img
          src="https://assets.aceternity.com/templates/startup-2.webp"
          alt="startup template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/templates/startup-3.webp"
          alt="startup template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/templates/startup-4.webp"
          alt="startup template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        /> */}
      </div>
    </div>
  )
}