import { BaseItemCard } from "@/components/shared/BaseItemCard";

type PostAction = "View";

type PostItemProps = {
  title: string;
  description: string;
  subDescription?: string;
  onAction?: (action: PostAction) => void;
};

export const PostItem = ({
  title,
  description,
  subDescription,
  onAction,
}: PostItemProps) => {
  return (
    <BaseItemCard
      title={title}
      description={description}
      subDescription={subDescription}
      actionLabel="View"
      onAction={() => onAction?.("View")}
    />
  );
};
