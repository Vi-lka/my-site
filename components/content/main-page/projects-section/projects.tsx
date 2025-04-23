import GlitchDialog from "@/components/special/glitch-dialog";
import MediaToggle from "@/components/special/media-toggle";
import { useTranslations } from "next-intl";

export const projects: {
  title: string;
  content: React.ReactNode;
}[] = [
  {
    title: "2024",
    content: <Content key="gms" project="gms" length={6} />,
  },
  {
    title: "2023",
    content: <>
      <Content key="hi" project="hi" length={4} className="mb-12 md:mb-24" />
      <Content key="vas" project="vas" length={4} />
    </>,
  },
  {
    title: "2022",
    content: <Content key="siberiana" project="siberiana" length={4} />
  }
];

function Content({
  project,
  length,
  className
}: {
  project: "gms" | "hi" | "vas" | "siberiana";
  length: number;
  className?: string;
}) {
  const t = useTranslations('HomePage.projects');

  return (
    <div className={className}>
      <p className="mb-4 md:mb-8 text-sm md:text-base font-bold text-foreground">
        {t(`${project}.title`)}
      </p>
      <p className="mb-4 md:mb-8 text-xs md:text-sm font-normal text-foreground">
        {t(`${project}.description`)}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {Array.from({ length: length }, (_, i) => i + 1).map(id => (
          <GlitchDialog
            key={id}
            title={t(`${project}.title`)}
            trigger={
              <MediaToggle 
                photoSrc={`/projects/${project}/${project}-${id}.webp`}
                videoSrc={`/projects/${project}/${project}-${id}-comp.mp4`}
                altText={t("title")}
                className="opacity-95 dark:opacity-80 hover:opacity-100 dark:hover:opacity-95 transition-all"
              />
            }
            className="p-0 sm:max-w-[900px] max-h-[90%]"
          >
            <div className="w-full h-full aspect-[17/9]">
              <video
                src={`/projects/${project}/${project}-${id}-comp.mp4`}
                autoPlay
                loop
                muted
                playsInline
                controls 
                controlsList="nodownload noremoteplayback noplaybackrate"
                disablePictureInPicture
                poster={`/projects/${project}/${project}-${id}.webp`}
                className="w-full h-full object-cover aspect-video rounded-sm"
              />
            </div>
          </GlitchDialog>
        ))}
      </div>
    </div>
  )
}