import { Card, CardContent } from '@/components/ui/card';

type StatsCardProps = {
  title: string;
  total: number;
};

export const StatsCard: React.FC<StatsCardProps> = ({ title, total }) => {
  return (
    <Card className="p-4 min-w-[200px]">
      <CardContent className="flex flex-col gap-4 items-center">
        <p className="text-3xl font-bold max-md:text-base">{total}</p>
        <p className="text-lg font-medium max-md:text-sm">{title}</p>
      </CardContent>
    </Card>
  );
};
