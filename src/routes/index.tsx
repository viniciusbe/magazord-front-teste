import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-[calc(100vh-40px)] flex flex-col items-center justify-center text-[calc(10px+2vmin)]">
      <h1>Github</h1>
    </div>
  );
}
