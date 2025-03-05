import { GrokChat } from "@/components/grok-chat";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center max-w-2xl mx-auto">
      <div className="p-5 border rounded-lg">
        <GrokChat />
      </div>
    </main>
  );
}
