import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BaseItemProps = {
  title: string;
  description: string;
  subDescription?: string;
  actionLabel: string;
  onAction?: () => void;
};

export const BaseItemCard = ({
  title,
  description,
  subDescription,
  actionLabel,
  onAction,
}: BaseItemProps) => {
  return (
    <Card className="w-full min-w-[400px] h-36 gap-y-2 max-md:min-w-[200px]">
      <CardHeader className="flex flex-row items-center justify-between ">
        <CardTitle className="text-xl truncate max-w-[250px] max-md:max-w-[180px] max-md:text-base max-md:font-bold">
          {title}
        </CardTitle>
        <Button onClick={onAction} variant={"outline"}>
          {actionLabel}
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-base truncate font-semibold max-md:text-sm">{description}</p>
        {subDescription && (
          <p className="text-sm text-muted-foreground truncate max-md:text-xs">
            {subDescription}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
