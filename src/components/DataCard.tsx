
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DataCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const DataCard: React.FC<DataCardProps> = ({ 
  title, 
  description, 
  children,
  className = ""
}) => {
  return (
    <Card className={`shadow-sm animate-fade-in ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DataCard;
