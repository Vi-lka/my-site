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
    // Декоратор для замера производительности
    function LogPerformance(thresholdMs: number = 100) {
      return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
          const start = performance.now();
          const result = await originalMethod.apply(this, args);
          const duration = performance.now() - start;
          const color = duration > thresholdMs ? '\\x1b[31m' : '\\x1b[32m'; // Красный для медленных, зеленый для быстрых
          console.log(
            \`\${color}[PERF] \${propertyKey} took \${duration.toFixed(2)}ms (args: \${JSON.stringify(args)})\${'\x1b[0m'}\`
          );
          return result;
        };
        return descriptor;
      };
    }

    // Типобезопасное хранилище логов
    type PerformanceLog = {
      method: string;
      duration: number;
      timestamp: string;
    };

    type LogStore<T extends PerformanceLog> = {
      logs: T[];
      addLog: (log: T) => void;
      printSummary: () => void;
    };

    // Функция создания хранилища логов
    function createLogStore(): LogStore<PerformanceLog> {
      const logs: PerformanceLog[] = [];
      return {
        logs,
        addLog(log: PerformanceLog) {
          logs.push(log);
        },
        printSummary() {
          const avgDuration = logs.reduce((sum, log) => sum + log.duration, 0) / logs.length || 0;
          const slowLogs = logs.filter((log) => log.duration > 100).length;
          console.log(
            \`\\x1b[36m[SUMMARY] Total logs: \${logs.length}, Avg duration: \${avgDuration.toFixed(2)}ms, Slow operations: \${slowLogs}\\x1b[0m\`
          );
        },
      };
    }
            
    // Пример сервиса веб-приложения
    class WebAppService {
      private logStore = createLogStore();
            
      @LogPerformance(100)
      async fetchUserData(userId: number): Promise<{ id: number; name: string }> {
        // Симуляция задержки
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 200));
        const log: PerformanceLog = {
          method: \`fetchUserData(\${userId})\`,
          duration: performance.now(),
          timestamp: new Date().toISOString(),
        };
        this.logStore.addLog(log);
        return { id: userId, name: \`User_\${userId}\` };
      }
            
      @LogPerformance(50)
      async processUserData(user: { id: number; name: string }): Promise<string> {
        // Симуляция быстрой обработки
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 80));
        const log: PerformanceLog = {
          method: \`processUserData(\${user.id})\`,
          duration: performance.now(),
          timestamp: new Date().toISOString(),
        };
        this.logStore.addLog(log);
        return \`Processed: \${user.name}\`;
      }
            
      printPerformanceSummary() {
        this.logStore.printSummary();
      }
    }
            
    // Использование
    (async () => {
      const app = new WebAppService();
            
      // Выполняем несколько операций
      const user1 = await app.fetchUserData(1);
      await app.processUserData(user1);
      const user2 = await app.fetchUserData(2);
      await app.processUserData(user2);
            
      // Выводим итоговую статистику
      app.printPerformanceSummary();
    })();
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