import React from "react";
import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [username, setUsername] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username.trim()) {
      navigate({ to: "/$username", params: { username } });
    }
  }

  return (
    <div className="min-h-[calc(100vh-72px)] max-w-6xl flex flex-col items-center justify-center m-auto py-10 px-4 gap-16">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
