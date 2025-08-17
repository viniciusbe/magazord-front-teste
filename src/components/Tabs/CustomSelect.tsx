import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomSelectProps {
  placeholder: string;
  items: { value: string; label: string }[];
  onChange: (selected: string) => void;
  selected?: string;
}

export default function CustomSelect({
  placeholder,
  items,
  onChange,
  selected,
}: CustomSelectProps) {
  return (
    <Select onValueChange={onChange} value={selected}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
