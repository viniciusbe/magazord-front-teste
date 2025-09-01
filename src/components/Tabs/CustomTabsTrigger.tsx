import { TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface TabsTriggerProps {
  value: string;
  text: string;
  children: React.ReactNode;
  count: number;
}

export default function CustomTabsTrigger(props: TabsTriggerProps) {
  const { value, text, count, children } = props;

  return (
    <TabsTrigger value={value}>
      {children}
      <span className="ml-4">{text}</span>
      <Badge variant="outline" className="ml-2">
        {count}
      </Badge>
    </TabsTrigger>
  );
}
