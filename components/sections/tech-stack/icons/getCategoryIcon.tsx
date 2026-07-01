import CloudIcon from "./CloudIcon";
import CodeIcon from "./CodeIcon";
import DbIcon from "./DbIcon";

export default function getCategoryIcon(id: string, size = 18) {
  if (id === "database") return <DbIcon size={size} />;
  if (id === "cloud") return <CloudIcon size={size} />;
  return <CodeIcon size={size} />;
}
