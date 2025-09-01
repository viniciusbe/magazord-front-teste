import { Star, GitBranch } from "lucide-react";

interface RepositoryCardProps {
  owner: string;
  name: string;
  link: string;
  description: string;
  stars: number;
  branches: number;
}

export default function RepositoryCard(props: RepositoryCardProps) {
  const { owner, name, link, description, stars, branches } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1 text-lg font-light">
        {owner}
        <span className="font-normal">/</span>
        <a className="font-semibold text-primary" href={link}>
          {name}
        </a>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="flex gap-8">
        <div className="flex items-center gap-2 text-sm">
          <Star className="size-5" />
          {stars}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <GitBranch className="size-5" />
          {branches}
        </div>
      </div>
    </div>
  );
}
