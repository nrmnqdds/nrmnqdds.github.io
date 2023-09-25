import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100 dark:bg-zinc-900 p-24">
      <ThemeSwitcher />
    </main>
  );
}
