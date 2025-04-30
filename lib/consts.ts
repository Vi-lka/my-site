import { type StaticImageData } from "next/image";
import gms_1 from "@/public/projects/gms/gms-1.webp";
import gms_2 from "@/public/projects/gms/gms-2.webp";
import gms_3 from "@/public/projects/gms/gms-3.webp";
import gms_4 from "@/public/projects/gms/gms-4.webp";
import gms_5 from "@/public/projects/gms/gms-5.webp";
import gms_6 from "@/public/projects/gms/gms-6.webp";
import hi_1 from "@/public/projects/hi/hi-1.webp";
import hi_2 from "@/public/projects/hi/hi-2.webp";
import hi_3 from "@/public/projects/hi/hi-3.webp";
import hi_4 from "@/public/projects/hi/hi-4.webp";
import vas_1 from "@/public/projects/vas/vas-1.webp";
import vas_2 from "@/public/projects/vas/vas-2.webp";
import vas_3 from "@/public/projects/vas/vas-3.webp";
import vas_4 from "@/public/projects/vas/vas-4.webp";
import siberiana_1 from "@/public/projects/siberiana/siberiana-1.webp";
import siberiana_2 from "@/public/projects/siberiana/siberiana-2.webp";
import siberiana_3 from "@/public/projects/siberiana/siberiana-3.webp";
import siberiana_4 from "@/public/projects/siberiana/siberiana-4.webp";
import pinchuga_1 from "@/public/projects/pinchuga/pinchuga-1.webp";
import pinchuga_2 from "@/public/projects/pinchuga/pinchuga-2.webp";

export const START_JOB_DATE = "2021-03-01"

export const CONTACTS = {
  tel: {
    title: "+7 933 325-85-65",
    href: "tel:+79333258565"
  },
  email: {
    title: "vitalya.permyakov155@gmail.com",
    href: "mailto:vitalya.permyakov155@gmail.com"
  },
  github: {
    title: "github.com/Vi-lka",
    href: "https://github.com/Vi-lka"
  },
  telegram: {
    title: "vi_lka7",
    href: "https://t.me/vi_lka7"
  },
}

export const SKILLS = {
  typescript: { id: "typescript", title: "TypeScript" },
  react: { id: "react", title: "React" },
  next: { id: "next", title: "Next.js" },
  tailwind: { id: "tailwind", title: "Tailwind CSS" },
  drizzle: {id: "drizzle", title: "Drizzle ORM"},
  prisma: { id: "prisma", title: "Prisma" },
  restApi: { id: "restApi", title: "REST API" },
  graphQL: { id: "graphQL", title: "GraphQL" },
  trpc: { id: "trpc", title: "tRPC" },
  webSocket: { id: "webSocket", title: "WebSocket" },
  tanstack: { id: "tanstack", title: "TanStack" },
  reactRouter: { id: "reactRouter", title: "React Router" },
  zustand: { id: "zustand", title: "Zustand" },
  redux: { id: "redux", title: "Redux Toolkit" },
  jotai: {id: "jotai", title: "Jotai" },
  nuqs: {id: "nuqs", title: "nuqs" },
  threeJs: { id: "threeJs", title: "Three.js" },
  spring: { id: "spring", title: "Spring" },
  motion: { id: "motion", title: "Motion" },
  docker: { id: "docker", title: "Docker" },
} as const

export const SKILLS_TERMINAL = [
  "TypeScript",
  "React / Next.js",
  "Drizzle / Prisma",
  "REST API / GraphQL / tRPC / WebSockets",
  "CSS / Tailwind",
  "Zustand / Jotai / nuqs / Redux Toolkit",
  "React Router / TanStack ...",
  "Three.js / Drei / Spring / Motion",
  "Docker",
]

export const SKILLS_EXAMPLES = {
  typescript: `
    // Constants for thresholds
    const THRESHOLDS = {
      fetchData: 200,
      processData: 150,
    } as const;

    // Type for performance logs
    type PerfLog = {
      method: string;
      duration: number;
      args: unknown[];
      thresholdMs: number;
    };

    // Type for async functions
    type AsyncFn<T, U> = (...args: T[]) => Promise<U>;

    // Helper for formatting log entries
    function formatLog(log: PerfLog): string {
      const color = log.duration > log.thresholdMs ? '\\x1b[31m' : '\\x1b[32m';
      return \`\${color}[PERF] \${log.method} took \${log.duration.toFixed(2)}ms (args: \${JSON.stringify(log.args)})\\x1b[0m\`
    }
      
    // Wrapper for performance logging
    function withPerformanceLog<T, U>(
      fn: AsyncFn<T, U>,
      methodName: string,
      thresholdMs: number
    ) {
      return async function (...args: T[]): Promise<{ result: U; log: PerfLog }> {
        const start = performance.now();
        const result = await fn(...args);
        const duration = performance.now() - start;
        const log: PerfLog = { method: methodName, duration, args, thresholdMs };
        console.log(formatLog(log));
        return { result, log };
      };
    }
      
    // Service for data processing
    class ApiService {
      private logs: PerfLog[] = [];
      
      // Collect log from method result
      private collectLog<T>(wrapped: { result: T; log: PerfLog }): T {
        this.logs.push(wrapped.log);
        return wrapped.result;
      }
      
      // Output all logs and summary in one console output
      printAllLogs(): string[] {
        const lines = ['\\x1b[1m[PERFORMANCE REPORT]\\x1b[0m'];
        this.logs.forEach(log => lines.push(formatLog(log)));
        const avg = this.logs.reduce((sum, log) => sum + log.duration, 0) / this.logs.length || 0;
        const slow = this.logs.filter(log => log.duration > log.thresholdMs).length;
        lines.push(
          \`\\x1b[36m[SUMMARY] Logs: \${this.logs.length}, Avg: \${avg.toFixed(2)}ms, Slow: \${slow}\\x1b[0m\`
        );
        console.log(lines.join('\\n'));
        return lines
      }
          
      private runFetchData = withPerformanceLog(
        async (id: number): Promise<{ id: number; data: string }> => {
          await new Promise(resolve => setTimeout(resolve, Math.random() * 250));
          return { id, data: \`Data_\${id}\` };
        },
        'fetchData',
        THRESHOLDS.fetchData
      );
          
      private runProcessData = withPerformanceLog(
        async (data: { id: number; data: string }): Promise<string> => {
          await new Promise(resolve => setTimeout(resolve, Math.random() * 200));
          return \`Processed: \${data.data}\`;
        },
        'processData',
        THRESHOLDS.processData
      );
          
      // Public API with log collection
      async fetchData(id: number) {
        return this.collectLog(await this.runFetchData(id));
      }
          
      async processData(data: { id: number; data: string }) {
        return this.collectLog(await this.runProcessData(data));
      }
    }
          
    export const apiService = new ApiService();
    
    // Usage
    const runDemo = async () => {
      await Promise.all(
        Array.from({ length: 10 }, (_, i) => i + 1).map(async id => {
          const data = await apiService.fetchData(id);
          await apiService.processData(data);
        })
      );
      const logLines = apiService.printAllLogs();
      return logLines
    };

    await runDemo();
  `,
  react: ``,
  next: ``,
  tailwind: ``,
  drizzle: ``,
  prisma: ``,
  restApi: ``,
  graphQL: ``,
  trpc: ``,
  webSocket: ``,
  tanstack: ``,
  reactRouter: ``,
  zustand: ``,
  redux: ``,
  jotai: ``,
  nuqs: ``,
  threeJs: ``,
  spring: ``,
  motion: ``,
  docker: ``,
}

export type ImageT = {
  id: `gms-${number}` | `hi-${number}` | `vas-${number}` | `siberiana-${number}` | `pinchuga-${number}`,
  data: StaticImageData;
}

export const IMAGES: ImageT[] = [
  {id: "gms-1", data: gms_1},
  {id: "gms-2", data: gms_2},
  {id: "gms-3", data: gms_3},
  {id: "gms-4", data: gms_4},
  {id: "gms-5", data: gms_5},
  {id: "gms-6", data: gms_6},
  {id: "hi-1", data: hi_1},
  {id: "hi-2", data: hi_2},
  {id: "hi-3", data: hi_3},
  {id: "hi-4", data: hi_4},
  {id: "vas-1", data: vas_1},
  {id: "vas-2", data: vas_2},
  {id: "vas-3", data: vas_3},
  {id: "vas-4", data: vas_4},
  {id: "siberiana-1", data: siberiana_1},
  {id: "siberiana-2", data: siberiana_2},
  {id: "siberiana-3", data: siberiana_3},
  {id: "siberiana-4", data: siberiana_4},
  {id: "pinchuga-1", data: pinchuga_1},
  {id: "pinchuga-2", data: pinchuga_2},
]