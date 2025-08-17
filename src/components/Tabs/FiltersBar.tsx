import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { languageOptions, typeOptions } from "@/constants/selectOptions";
import CustomSelect from "./CustomSelect";

interface FiltersBarProps {
  selectedType: string;
  setSelectedType: (values: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (values: string) => void;
}

export default function FiltersBar(props: FiltersBarProps) {
  const {
    selectedType,
    setSelectedType,
    selectedLanguage,
    setSelectedLanguage,
  } = props;

  return (
    <div className="flex justify-between items-center">
      <div className="relative w-full max-w-[444px]">
        <Search className="absolute left-0 top-2 h-6 w-6 text-muted-foreground" />
        <Input placeholder="Search Here" />
      </div>
      <div className="flex gap-4">
        <CustomSelect
          placeholder="Type"
          items={typeOptions}
          onChange={setSelectedType}
          selected={selectedType}
        />
        <CustomSelect
          placeholder="Language"
          items={languageOptions}
          onChange={setSelectedLanguage}
          selected={selectedLanguage}
        />
      </div>
    </div>
  );
}
