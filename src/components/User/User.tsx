import UserDetail from "./UserDetail";

export default function User() {
  return (
    <aside className="w-[251px] flex flex-col items-center gap-6">
      <div className="w-[150px] h-[150px] rounded-full bg-red-500"></div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl font-bold text-[#262626]">
          Gabriel Cordeiro
        </span>
        <span className="text-center text-[#989898]">
          Head development team Front-End Magazord - Tagged (#BZ)
        </span>
      </div>
      <ul className="flex flex-col w-full gap-4 mt-2">
        <UserDetail>Magazord</UserDetail>
        <UserDetail>Rio do sul</UserDetail>
      </ul>
    </aside>
  );
}
