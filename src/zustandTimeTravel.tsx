import { useEffect, useState } from "react";
import { DevtoolsEventClient } from "./eventClient";

export function ZustandTimeTravel() {
  const [snapshots, setSnapshots] = useState<Array<any>>([]);

  useEffect(() => {
    const cleanup = DevtoolsEventClient.on("search-state", (event) => {
      setSnapshots((prev) => [...(prev || []), event.payload]);
    });

    return cleanup;
  }, []);

  return (
    <div>
      <h2>Zustand Time Travel</h2>
      {snapshots.length > 0 && (
        <input
          type="range"
          min={0}
          max={snapshots.length - 1}
          onChange={(e) => {
            const index = Number(e.target.value);
            DevtoolsEventClient.emit("revert", snapshots[index]);
          }}
        />
      )}
    </div>
  );
}
