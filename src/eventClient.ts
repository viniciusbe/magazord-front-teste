import { EventClient } from "@tanstack/devtools-event-client";

type EventMap = {
  "zustand:search-state": { search: string };
  "zustand:revert": { search: string };
};

class CustomEventClient extends EventClient<EventMap> {
  constructor() {
    super({
      pluginId: "zustand",
      debug: true,
    });
  }
}

export const DevtoolsEventClient = new CustomEventClient();
