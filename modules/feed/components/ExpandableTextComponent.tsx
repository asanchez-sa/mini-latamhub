import { useState } from "react";
import { Button } from "@/components/ui/button";

const ExpandableTextComponent = ({
  text,
  maxLength = 100,
}: {
  text: string;
  maxLength: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p className="text-wrap text-muted-foreground">{text}</p>;
  }

  return (
    <div>
      <p className="text-wrap text-muted-foreground">
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpand}
          className="mt-2"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </Button>
      </p>
    </div>
  );
};

export default ExpandableTextComponent;
