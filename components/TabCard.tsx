import { Circle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";

interface tabDataType {
  title: string;
  desc: string;
  date: string;
  tech1: string;
  tech2: string;
  tech3: string;
}

export function TabCard({title, desc, date, tech1, tech2, tech3}: tabDataType) {
  return (
    <Card className="w-full mb-2">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {desc}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <div className="bg-[#27272a] text-xs p-1 rounded">{date}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3  text-purple-400" />
            {tech1}
          </div>
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3 text-purple-400" />
            {tech2}
          </div>
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3 text-purple-400" />
            {tech3}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
