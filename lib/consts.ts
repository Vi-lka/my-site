export const START_JOB_DATE = "2021-03-01"

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