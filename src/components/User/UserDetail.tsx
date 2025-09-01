interface UserDetailProps {
  children: React.ReactNode;
}

export default function UserDetail(props: UserDetailProps) {
  const { children } = props;

  return (
    <li className="flex items-center gap-[10px]">
      <div className="w-[16px] h-[16px] rounded-full bg-[#0587FF]" />
      <span className="text-sm text-[#0587FF]">{children}</span>
    </li>
  );
}
