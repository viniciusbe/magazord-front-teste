import api from "@/lib/axios";
import type { User } from "@/types/github";

export async function fetchGithubUser(username: string) {
  const res = await api.get<User>(`/users/${username}`);
  return res.data;
}