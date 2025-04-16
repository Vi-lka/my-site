"use client"

import { AnimatedSpan, Terminal } from '@/components/magicui/terminal';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import React from 'react'

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
  const color = log.duration > log.thresholdMs ? '\x1b[31m' : '\x1b[32m';
  return `${color}[PERF] ${log.method} took ${log.duration.toFixed(2)}ms (args: ${JSON.stringify(log.args)})\x1b[0m`
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
    const lines = ['\x1b[1m[PERFORMANCE REPORT]\x1b[0m'];
    this.logs.forEach(log => lines.push(formatLog(log)));
    const avg = this.logs.reduce((sum, log) => sum + log.duration, 0) / this.logs.length || 0;
    const slow = this.logs.filter(log => log.duration > log.thresholdMs).length;
    lines.push(
      `\x1b[36m[SUMMARY] Logs: ${this.logs.length}, Avg: ${avg.toFixed(2)}ms, Slow: ${slow}\x1b[0m`
    );
    console.log(lines.join('\n'));
    return lines
  }

  private runFetchData = withPerformanceLog(
    async (id: number): Promise<{ id: number; data: string }> => {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 250));
      return { id, data: `Data_${id}` };
    },
    'fetchData',
    THRESHOLDS.fetchData
  );

  private runProcessData = withPerformanceLog(
    async (data: { id: number; data: string }): Promise<string> => {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 200));
      return `Processed: ${data.data}`;
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

// Parse log line to extract content and CSS color
function parseLogLine(line: string): { content: string; color: string } {
  // Remove ANSI codes and detect color
  const cleanLine = line.replace(/\x1b\[[0-9;]*m/g, '');
  if (line.includes('\x1b[31m')) return { content: cleanLine, color: 'text-destructive' }; // Slow
  if (line.includes('\x1b[32m')) return { content: cleanLine, color: 'text-green-500' }; // Fast
  if (line.includes('\x1b[36m')) return { content: cleanLine, color: 'text-cyan-500' }; // Summary
  if (line.includes('\x1b[1m')) return { content: cleanLine, color: 'text-foreground' }; // Header
  return { content: cleanLine, color: 'text-foreground' }; // Default
}

export default function TypeScriptDemo({
  delay,
  className
}: {
  delay: number,
  className?: string
}) {
  const [logs, setLogs] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const apiService = new ApiService();
    const runDemo = async () => {
      setIsLoading(true);
      try {
        await Promise.all(
          Array.from({ length: 10 }, (_, i) => i + 1).map(async id => {
            const data = await apiService.fetchData(id);
            await apiService.processData(data);
          })
        );
        const result = apiService.printAllLogs();
        setLogs(result);
      } finally {
        setIsLoading(false);
      }
    };

    void runDemo();
  }, []);

  if (isLoading) return (
    <div className={cn('w-full h-full flex items-center justify-center border rounded p-8', className)}>
      <LoaderCircle className="animate-spin" />
    </div>
  )
  return (
    <Terminal 
      className="text-sm w-full max-w-none max-h-none bg-transparent border-none" 
      classNamePre='p-0'
      classNameBar="opacity-0 hidden"
    >
      <ScrollArea 
        type="always" 
        classNameViewport={cn("w-full border rounded p-8", className)}
      >
        {logs.map((line, index) => {
          const { content, color } = parseLogLine(line);
          return (
            <AnimatedSpan 
              key={index} 
              delay={delay * 1000 + index * 50} 
              className={cn("", color)}
            >
              {content}
            </AnimatedSpan>
          )
        })}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Terminal>
  )
}
