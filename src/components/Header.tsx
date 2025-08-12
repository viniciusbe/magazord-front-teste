import { Link } from "@tanstack/react-router";
import githubLogo from "../github-logo.svg";
import githubNameLogo from "../github-name-logo.svg";

export default function Header() {
  return (
    <header className="flex items-center gap-2 bg-[#24292E] text-white h-[72px] ">
      <div className="min-w-7xl m-auto px-4 flex items-center gap-5">
        <div className="flex gap-4">
          <img src={githubLogo} />
          <img src={githubNameLogo} />
        </div>
        <div>
          <span className="text-2xl">/</span>
        </div>
        <nav className="">
          <ul className="">
            <li>
              <Link to="/">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
