import { useParams } from "@tanstack/react-router";
import UserDetail from "./UserDetail";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser } from "@/services/github";
import type { User } from "@/types/github";

export default function User() {
  const { username } = useParams({ strict: false });

  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["user", username],
    queryFn: () => fetchGithubUser(username!),
    meta: {
      errorMessage: "Erro ao buscar usuário",
    },
    enabled: !!username,
  });

  if (!user) {
    if (isLoading) return <div>Carregando usuario...</div>;
    return <div>Erro ao buscar usuario.</div>;
  }

  return (
    <aside className="w-[251px] flex flex-col items-center gap-6">
      <img
        src={user.avatar_url}
        alt={user.name || user.login}
        className="w-[150px] h-[150px] rounded-full object-cover"
      />
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl font-bold text-[#262626]">{user.name}</span>
        <span className="text-center text-[#989898]">{user.bio}</span>
      </div>
      <ul className="flex flex-col w-full gap-4 mt-2">
        {user.company && <UserDetail>{user.company}</UserDetail>}
        {user.location && <UserDetail>{user.location}</UserDetail>}
      </ul>
    </aside>
  );
}
