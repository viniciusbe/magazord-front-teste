import User from "@/components/User/User";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-[calc(100vh-72px)] max-w-7xl flex justify-center m-auto py-10 px-4">
      <User />
      <main>
        <h1>Github</h1>
      </main>
    </div>
  );
}
