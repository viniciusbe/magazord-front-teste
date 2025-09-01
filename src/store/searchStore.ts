import { create } from "zustand";
import { DevtoolsEventClient } from "@/eventClient";

interface SearchStore {
  search: string;
  setSearch: (value: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (value) => {
    set({ search: value });
    DevtoolsEventClient.emit("search-state", { search: value });
  },
}));

DevtoolsEventClient.on("revert", (event) => {
  useSearchStore.setState({ search: event.payload.search });
});
