
import React from "react";

interface DashboardHeaderProps {
  title: string;
  description?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  title, 
  description 
}) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="mt-2 text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default DashboardHeader;
