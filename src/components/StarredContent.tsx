import React from "react";
import RepositoryCard from "./Tabs/RepositoryCard";
import FiltersBar from "./Tabs/FiltersBar";

export default function StarredContent() {
  const [selectedType, setSelectedType] = React.useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("");

  return (
    <>
      <FiltersBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <div className="flex flex-col mt-10 gap-12">
        <RepositoryCard
          owner="Node"
          name="Release"
          link="https://google.com"
          description="Node.js Foundation Release Working Group."
          stars={1569}
          branches={1569}
        />
        <RepositoryCard
          owner="Cordeiro"
          name="Angular Choosen"
          link="https://google.com"
          description="Node.js Foundation Release Working Group."
          stars={1569}
          branches={1569}
        />
      </div>
    </>
  );
}
